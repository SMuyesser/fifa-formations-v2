import React from 'react';
import {connect} from 'react-redux';

import '../component-css/playerinstructions.css';

export class PlayerInstructions extends React.Component {

    render() {

        return (
            <div className="playerInstructions">
                <h2>Player Instructions</h2>
                <div className="all-instructions">
                    <div className="fwd-container">
                        <h3 id="fwd-header">Forwards</h3>
                    	<ul className="fwd-instructions">
        	            	{this.props.fwdInstructions.map((instructions, index) => {
        	            		return <li key={index}>-{instructions}</li>
        	            	})}
                    	</ul>
                    </div>
                    <div className="fwd-container">
                        <h3>Midfielders</h3>
                    	<ul className="mid-instructions">
        	            	{this.props.midInstructions.map((instructions, index) => {
        	            		return <li key={index}>-{instructions}</li>
        	            	})}
                    	</ul>
                    </div>
                    <div className="fwd-container">
                        <h3>Defenders</h3>
                    	<ul className="def-instructions">
        	            	{this.props.defInstructions.map((instructions, index) => {
        	            		return <li key={index}>-{instructions}</li>
        	            	})}
                    	</ul>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
		defInstructions: state.formations.defInstructions,
		midInstructions: state.formations.midInstructions,
		fwdInstructions: state.formations.fwdInstructions
});

export default connect(mapStateToProps)(PlayerInstructions);
