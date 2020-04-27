export enum BuildingsActionTypes {
    GET_BUILDINGS_REQUEST = 'buildings/GET_BUILDINGS_REQUEST',
    GET_BUILDINGS_SUCCESS = 'buildings/GET_BUILDINGS_SUCCESS',
    GET_BUILDINGS_FAIL = 'buildings/GET_BUILDINGS_FAIL',

    ADD_BUILDING_REQUEST = 'buildings/ADD_BUILDING_REQUEST',
    ADD_BUILDING_SUCCESS = 'buildings/ADD_BUILDING_SUCCESS',
    ADD_BUILDING_FAIL = 'buildings/ADD_BUILDING_FAIL',

    UPDATE_BUILDING_REQUEST = 'buildings/UPDATE_BUILDING_REQUEST',
    UPDATE_BUILDING_SUCCESS = 'buildings/UPDATE_BUILDING_SUCCESS',
    UPDATE_BUILDING_FAIL = 'buildings/UPDATE_BUILDING_FAIL',

    DELETE_BUILDING_REQUEST = 'buildings/DELETE_BUILDING_REQUEST',
    DELETE_BUILDING_SUCCESS = 'buildings/DELETE_BUILDING_SUCCESS',
    DELETE_BUILDING_FAIL = 'buildings/DELETE_BUILDING_FAIL',

    UPDATE_BUILDING_COUNT = 'buildings/UPDATE_BUILDING_COUNT'

}

export interface Count {
    id: string;
    value: number
}

export interface Building {
    count: Count;
    error: boolean;
    list: any[];
    skip: number;
    limit: number;
    search: string;
    loading: boolean;
    id?: string
}


