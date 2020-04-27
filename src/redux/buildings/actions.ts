import {action} from "typesafe-actions";
import {BuildingsActionTypes, Building, Count} from "./types";
import {consoleLogger} from "@firebase/performance/dist/src/utils/console_logger";

interface BuildingRequest {
    buildings: any[],
    count: number
}

export const getBuildingRequest =() => action(BuildingsActionTypes.GET_BUILDINGS_REQUEST);
export const getBuildingSuccess = (data:BuildingRequest) => action(BuildingsActionTypes.GET_BUILDINGS_SUCCESS, data);
export const getBuildingsFail = (err: string) => action(BuildingsActionTypes.GET_BUILDINGS_FAIL, err);

export const addBuildingRequest = <T>(newBuilding:T) => action(BuildingsActionTypes.ADD_BUILDING_REQUEST, newBuilding);
export const addBuildingSuccess = <R>(response:R) => action(BuildingsActionTypes.ADD_BUILDING_SUCCESS, response);
export const addBuildingFail = (error: string) => action(BuildingsActionTypes.ADD_BUILDING_FAIL, error);

export const updateBuildingRequest = (building: Building)=> action(BuildingsActionTypes.UPDATE_BUILDING_REQUEST, building)
export const updateBuildingSuccess = <R>(response:R) => action(BuildingsActionTypes.UPDATE_BUILDING_SUCCESS, response)
export const updateBuildingFail = (error: string) => action(BuildingsActionTypes.UPDATE_BUILDING_FAIL, error)

export const deleteBuildingRequest = (id: string) => action(BuildingsActionTypes.DELETE_BUILDING_REQUEST, id)
export const deleteBuildingSuccess = <R>(response: R) => action(BuildingsActionTypes.DELETE_BUILDING_SUCCESS, response)
export const deleteBuildingFail = (error: string) => action(BuildingsActionTypes.DELETE_BUILDING_FAIL, error)

export const updateBuildingCount = (count: Count) => action(BuildingsActionTypes.UPDATE_BUILDING_COUNT, count)