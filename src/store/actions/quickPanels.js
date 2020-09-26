//import * as actionTypes from './actionTypes';
import axios from '../../axios-base';

export const setApplications = (apps, panelType) => {
    return {
        type: "QP_SET",
        apps: apps,
        panelType: panelType
    };
};

export const checkboxChanged = (appId) => {
    return {
        type: "QPA_CHECKBOX_CHANGED",
        appId: appId
    };
}

export const fetchApplicationsFailed = (panelType) => {
    return {
        type: "QP_FETCH_FAILED",
        panelType: panelType
    };
};

export const setFilterStatus = (filtered) => {
    return {
        type: "QPA_FILTERED",
        filtered: filtered
    };
}

export const checkDeviceOsType = (deviceOs) => {
    switch (deviceOs) {
        case "ios": return "ios.json";
        case "windows": return "windows.json";
        case "android": return "android.json";
        case "macos": return "macos.json";
        default: return "windows.json";
    }
}

export const checkPanelType = (panelType) => {
    switch (panelType) {
        case "app": return "QuickAppPanel/";
        case "support": return "QuickSupportPanel/";
        default: return "QuickAppPanel/";
    }
}

export const initQuickPanel = (panelType, deviceOs, enteredFilter) => {
    return dispatch => {

        let url = '/panels/';
        url += checkPanelType(panelType);
        url += checkDeviceOsType(deviceOs);

        if (typeof enteredFilter !== 'undefined') {
            enteredFilter = enteredFilter.replace(/\s/g, '');
            if (enteredFilter !== '') {
                url += enteredFilter.length === 0
                    ? '' : `?orderBy="$key"&startAt="${enteredFilter.toLowerCase()}"&endAt="${enteredFilter.toLowerCase()}\uf8ff"`;
                dispatch(setFilterStatus(true));
            } else {
                dispatch(setFilterStatus(false));
            }
        } else {
            dispatch(setFilterStatus(false));
        }
        //console.log(url);

        axios.get(url)
            .then(response => {
                const fetchedApp = {};
                for (let key in response.data) {
                    fetchedApp[key] = {
                        id: key,
                        checked: panelType === 'app' ? false : undefined,
                        ...response.data[key]
                    }
                };
                dispatch(setApplications(fetchedApp, panelType))
            })
            .catch(error => {
                dispatch(fetchApplicationsFailed(panelType));
            });
    };
};