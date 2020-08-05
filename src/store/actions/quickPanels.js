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

export const initQuickPanel = (panelType) => {
    return dispatch => {
        let url = (panelType === 'app') ? '/Panels/QuickAppPanel.json' : '/Panels/QuickSupportPanel.json';

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