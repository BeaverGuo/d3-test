/*
 * Reducer
 *
 * reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
	LOAD_REPOS_SUCCESS,
	LOAD_REPOS,
	LOAD_REPOS_ERROR,
	CHANGE_TREE_DATA,
	ADD_CHILDREN_TO_TREE_DATA
} from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
	loading: false,
	error: false,
	currentUser: false,
	userData: fromJS({
		repositories: false,
	}),
	treeData:[],

});

//helper function
const updateItem = (state,actData,prop,pk,...propsArr) => {
	state[prop].map((val)=>{
		if(val.pk === pk){
			if(val.hasOwnProperty('children_wp'))
				val.children_wp.map((child)=>{
					if(child.pk === actData.pk){
						child.children_wp = actData.children_wp;
						return child;
					}
				});
			return val;
		}
	});
	return fromJS(state);
}

function appReducer(state = initialState, action) {
	switch (action.type) {
		case LOAD_REPOS:
			return stat
				.set('loading', true)
				.set('error', false)
				.setIn(['userData', 'repositories'], false);
		case LOAD_REPOS_SUCCESS:
			return state
				.setIn(['userData', 'repositories'], action.repos)
				.set('loading', false)
				.set('currentUser', action.username);
		case LOAD_REPOS_ERROR:
			return state
				.set('error', action.error)
				.set('loading', false);
		case CHANGE_TREE_DATA:
			return state.set('treeData',action.data);
		case ADD_CHILDREN_TO_TREE_DATA:
			state = state.toJS();
			return updateItem(state,action.data,'treeData',action.pk,'children_wp');
		default:
			return state;
	}
}

export default appReducer;