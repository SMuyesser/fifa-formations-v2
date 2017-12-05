import React from 'react';
import {connect} from 'react-redux';

import '../component-css/formationimage.css';


export class FormationImage extends React.Component {

    render() {
        return (
            <div className="formationImage">
		        <img src={require('../images/'+this.props.image+'.jpg')} width={200} height={100} alt={'formation'} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
	image: state.formations.image
});

export default connect(mapStateToProps)(FormationImage);
