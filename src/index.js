function createSum () {
    let result = 0;
    return function (param) {
        return result += param;
    };
}
createSum();

function counter (initialValue, step) {
    let result = initialValue;
    return {
        count: () => result += step,
        resetCount: () => result = initialValue,
    };
}
counter();