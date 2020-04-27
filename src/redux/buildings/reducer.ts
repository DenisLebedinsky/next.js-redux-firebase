import {BuildingsActionTypes, Building} from "./types";
import {Reducer} from "redux";
import * as actions from './actions';
import {ActionType} from "typesafe-actions";

const initialState: Building = {
    count: {
        id: '',
        value: 0
    },
    error: false,
    list: [],
    skip: 0,
    limit: 20,
    search: '',
    loading: false
}

// type Actions = ActionType<typeof actions>

export const reducer: Reducer<Building> = (state = initialState, action) => {

    switch (action.type) {
        case BuildingsActionTypes.GET_BUILDINGS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case BuildingsActionTypes.GET_BUILDINGS_SUCCESS:
            return {
                ...state,
                list: action.payload.buildings,
                count: action.payload.count,
                loading: false
            }
        case BuildingsActionTypes.GET_BUILDINGS_FAIL:
            return {
                ...state,
                loading: false
            }
        case BuildingsActionTypes.ADD_BUILDING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case BuildingsActionTypes.ADD_BUILDING_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case BuildingsActionTypes.ADD_BUILDING_FAIL:
            return {
                ...state,
                loading: false
            }
        case BuildingsActionTypes.UPDATE_BUILDING_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}
