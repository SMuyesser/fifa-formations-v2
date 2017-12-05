import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {PlayerInstructions} from '../components/playerinstructions';

it('renders without crashing', () => {
	shallow(<PlayerInstructions fwdInstructions={[1,2,3]} midInstructions={[1,2,3]} defInstructions={[1,2,3]} />);
});