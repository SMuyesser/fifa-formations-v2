import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {ProsCons} from '../components/proscons';

it('renders without crashing', () => {
	shallow(<ProsCons strength={[1,2,3]} weakness={[1,2,3]} />);
});