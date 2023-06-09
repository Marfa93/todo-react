// import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const { SHOW_ALL } = types.VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];

        case types.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    visibilityFilter,
    todos
});

export default rootReducer;
