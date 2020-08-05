//import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    baseApps: null,
    baseAppsError: false,
    supportApps: null,
    supportAppsError: false,
    buttonVisible: false,
    baseLink: "https://ninite.com/",
    mainLink: ""
};

const setApplications = (state, action) => {
    let apps = {};
    switch (action.panelType) {
        case 'app': return apps = updateObject(state, { baseApps: { ...action.apps }, baseAppsError: false });
        case 'support': return apps = updateObject(state, { supportApps: { ...action.apps }, supportAppsError: false });
        default: console.log(`Panel Type for setup it, didn't founded - [Quick App Reducer]`);
    }
    return apps;
};

const changeCheckBoxLink = (state, action) => {
    let showDownloadButton;
    let mainLinkUpdated = "";

    const updatedApp = {
        [action.appId]: {
            ...state.baseApps[action.appId],
            checked: !state.baseApps[action.appId].checked
        }
    }
    const updatedApps = updateObject(state.baseApps, updatedApp);

    for (let key in updatedApps) {
        if (updatedApps[key].checked) {
            showDownloadButton = true;
            mainLinkUpdated += "-" + key;
        }
    }

    mainLinkUpdated = state.baseLink + mainLinkUpdated.slice(1) + "/ninite.exe";

    const updatedState = {
        baseApps: updatedApps,
        buttonVisible: showDownloadButton,
        mainLink: mainLinkUpdated
    }
    return updateObject(state, updatedState);
}

const fetchApplicationsFailed = (state, action) => {
    let error;
    switch (action.panelType) {
        case 'app': return error = updateObject( state, { baseAppsError: true } );
        case 'support': return error = updateObject( state, { supportAppsError: true } );
        default: console.log(`Panel Type for Error didn't founded - [Quick App Reducer]`);
    }

    return error
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "QP_SET": return setApplications(state, action);
        case "QPA_CHECKBOX_CHANGED": return changeCheckBoxLink(state, action);
        case "QP_FETCH_FAILED": return fetchApplicationsFailed(state, action);
        default: return state;
    }
}

export default reducer;