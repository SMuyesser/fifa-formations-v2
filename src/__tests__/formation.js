import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Formations} from '../components/formation';

it('renders without crashing', () => {
	shallow(<Formations />);
});