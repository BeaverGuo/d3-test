/*
 * Actions
 *
 * Action 是把数据从应用传到 store 的有效载荷。
 * 它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
 *
 * Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。
 * 而这正是 reducer 要做的事情。
 *
 * To add a new Action:
 * 1) Import your actiontype
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
	LOAD_REPOS,
	LOAD_REPOS_SUCCESS,
	LOAD_REPOS_ERROR,
	CHANGE_TREE_DATA,
	ADD_CHILDREN_TO_TREE_DATA,
} from './actionTypes';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
	return {
		type: LOAD_REPOS,
	};
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
	return {
		type: LOAD_REPOS_SUCCESS,
		repos,
		username,
	};
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
	return {
		type: LOAD_REPOS_ERROR,
		error,
	};
}

//存树
export function changeTreeData(data){
 	return { type:CHANGE_TREE_DATA, data:data };
}
//改树
export function addChildrenToTreeData(pk,data){
 	return { type:ADD_CHILDREN_TO_TREE_DATA, pk, data };
}