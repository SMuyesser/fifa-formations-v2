import {SET_FORMATION} from '../actions/formations';

const initialState = {
	formation: '',
	image: 'empty',
	strength: [],
	weakness: [],
	defInstructions: [],
	midInstructions: [],
	fwdInstructions: [],
	defTacticsPress: 0,
	defTacticsAggr: 0,
	defTacticsWidth: 0,
	defTacticsLine: '',
	ccTacticsPass: 0,
	ccTacticsShoot: 0,
	ccTacticsCross: 0,
	ccTacticsPos: '',
	buildUpTacticsSpd: 0,
	buildUpTacticsPass: 0,
	buildUpTacticsPos: ''
}

export default function reducer(state = initialState, action) {
	if(action.type === SET_FORMATION) {
		return Object.assign({}, state, {
			formation: action.formation,
			image: action.image,
			strength: action.strength,
			weakness: action.weakness,
			defInstructions: action.defInstructions,
			midInstructions: action.midInstructions,
			fwdInstructions: action.fwdInstructions,
			defTacticsPress: action.defTacticsPress,
			defTacticsAggr: action.defTacticsAggr,
			defTacticsWidth: action.defTacticsWidth,
			defTacticsLine: action.defTacticsLine,
			ccTacticsPass: action.ccTacticsPass,
			ccTacticsShoot: action.ccTacticsShoot,
			ccTacticsCross: action.ccTacticsCross,
			ccTacticsPos: action.ccTacticsPos,
			buildUpTacticsSpd: action.buildUpTacticsSpd,
			buildUpTacticsPass: action.buildUpTacticsPass,
			buildUpTacticsPos: action.buildUpTacticsPos
		});
   	} else {
		return state;
	}
};

