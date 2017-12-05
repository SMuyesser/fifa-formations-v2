import React from 'react';
import {connect} from 'react-redux';

import '../component-css/proscons.css';

export class ProsCons extends React.Component {

    render() {

        return (
            <div className="proscons">
            	<div className="strength-container">
	            	<h2>Strength</h2>
	            	<ul className="strength-list">
		            	{this.props.strength.map((strengthInfo, index) => {
		            		return <li key={index}>+{strengthInfo}</li>
		            	})}
		            </ul>
            	</div>
            	<div className="weakness-container">
	            	<h2>Weakness</h2>
	            	<ul className="weakness-list">
		            	{this.props.weakness.map((weaknessInfo, index) => {
		            		return <li key={index}>-{weaknessInfo}</li>
		            	})}
		            </ul>
		        </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
	strength: state.formations.strength,
	weakness: state.formations.weakness
});

export default connect(mapStateToProps)(ProsCons);
