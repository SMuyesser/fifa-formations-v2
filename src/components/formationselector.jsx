import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {API_BASE_URL} from '../config';
import {setFormation} from '../actions/formations';
import FormationImage from './formationimage';

import '../component-css/formationselector.css';

export class FormationSelector extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			options: []
		}
	}

	//when component mounts gets all formation names and adds to local state options
	componentDidMount() {
		let selectForm = document.getElementById('select-formation');
		setTimeout(() => {
			selectForm.className = 'select-formation highlight';
		}, 1000)
		setTimeout(() => {
			selectForm.className = 'select-formation highlight2';
		}, 2000)
		setTimeout(() => {
			selectForm.className = 'select-formation highlight';
		}, 3000)
		setTimeout(() => {
			selectForm.className = 'select-formation highlight2';
		}, 4000)
		const component = this;
		axios.get(`${API_BASE_URL}/formations`)
		.then(response => {
			for(var i = 0; i < response.data.length; i++) {
				component.setState({
					options: [...component.state.options, response.data[i].formation]
				})
			}
		})
	}

	//dispatches the formation that is selected
	setFormation(event) {
		event.preventDefault();
		let selectForm = document.getElementById('select-formation');
		selectForm.className = 'select-formation';
		const selectedFormation = document.getElementById('select-one').value;
		axios.get(`${API_BASE_URL}/formations/${selectedFormation}`)
		.then(response => {
			this.props.dispatch(setFormation(response.data));
		})
		.catch(error => {
			return console.error(error);
		})
	}

    render() {

    	//gets formations name from local state to be used as form options
		let formOptions;
		formOptions = this.state.options.map((option, index) => {
			return <option key={index} value={option}>{option}</option>
		});

        return (
            <div className="formation-selector">
            	<div id="main-title"><span>FIFA </span><span id="greenF">F</span>ORMATIONS</div>
            	<div className="select-formation" id="select-formation">
	                <p>Select formation:</p>
					<form className="select-formation-form-group">
					  <select className="select-formation-form-control" id="select-one">
					  	{formOptions}
					  </select>
					    <input type="submit" onClick={e => this.setFormation(e)}></input>
					</form>	
				</div>
				<FormationImage />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    formation: state.formations.formation
});

export default connect(mapStateToProps)(FormationSelector);