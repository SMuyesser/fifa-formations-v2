import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {Main} from '../components/main';

it('renders without crashing', () => {
	shallow(<Main />);
});