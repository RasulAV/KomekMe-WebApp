import { updateObject } from '../../shared/utility';

const initialState = {
    deviceOs: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "DEVICE_OS_SET": return updateObject(state, {deviceOs: action.deviceOs});;
        default: return state;
    }
}

export default reducer;