export const debounce = (func, timeout = 300) => {
    let timerId;

    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            func(...args);
        }, timeout);
    };
};
