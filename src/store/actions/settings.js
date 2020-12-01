export const setDeviceOs = (osType, forceSetOs) => {
    let deviceOs;

    if (forceSetOs) {
        localStorage.setItem('deviceOs', osType);
        deviceOs = osType;
    } else {
        deviceOs = localStorage.getItem('deviceOs');
        if (!deviceOs) {
            deviceOs = osType;
        };
    }

    return {
        type: "DEVICE_OS_SET",
        deviceOs: deviceOs
    };
}