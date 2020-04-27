////////  SAGAS //////////////////////////////////////////
import {call, put, select, takeLatest} from "redux-saga/effects";
import {BuildingsActionTypes} from "./types";
import FireStore from "../../firebase/fireStore";
import {buildingsCountSelector} from "./selectors";
import {
    addBuildingFail,
    addBuildingRequest,
    addBuildingSuccess,
    deleteBuildingFail,
    getBuildingsFail,
    getBuildingSuccess,
    deleteBuildingRequest, updateBuildingCount, deleteBuildingSuccess
} from "./actions";
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

es6promise.polyfill();

export default function* sagas() {
    yield takeLatest(BuildingsActionTypes.GET_BUILDINGS_REQUEST, getBuildingsRequestSaga)
    yield takeLatest(BuildingsActionTypes.ADD_BUILDING_REQUEST, addBuildingRequestSaga)
    yield takeLatest(BuildingsActionTypes.DELETE_BUILDING_REQUEST, deleteBuildingRequestSaga)
    yield takeLatest(BuildingsActionTypes.ADD_BUILDING_SUCCESS, getBuildingsRequestSaga)
    yield takeLatest(BuildingsActionTypes.DELETE_BUILDING_SUCCESS, getBuildingsRequestSaga)
}

function* getBuildingsRequestSaga() {
    try {
        const buildings = yield call(FireStore.getBuildings);
        const count = yield call(FireStore.getBuildingsCount)

        yield put(getBuildingSuccess({
            buildings,
            count
        }));

    } catch (err) {
        yield put(getBuildingsFail(err))
    }
}

function* addBuildingRequestSaga({payload}: ReturnType<typeof addBuildingRequest>) {
    try {
        const result = yield call(FireStore.addBuilding, payload);

        let count = yield select(buildingsCountSelector);

        if (!count.id) {
            count = yield call(FireStore.getBuildingsCount);
            yield put(updateBuildingCount(count));
        }

        count.value = ++count.value;
        yield call(FireStore.updateBuildingCount, count)
        yield put(addBuildingSuccess(result.id))
    } catch (err) {
        yield put(addBuildingFail(err))
    }
}


function* deleteBuildingRequestSaga({payload}: ReturnType<typeof deleteBuildingRequest>) {
    try {
        const result = yield call(FireStore.deleteBuilding, payload);

        let count = yield select(buildingsCountSelector);

        if (!count.id) {
            count = yield call(FireStore.getBuildingsCount);
            yield put(updateBuildingCount(count));
        }

        count.value = count.value - 1;

        yield call(FireStore.updateBuildingCount, count)

        yield put(deleteBuildingSuccess(result))

    } catch (err) {
        yield put(deleteBuildingFail(err));
    }
}
