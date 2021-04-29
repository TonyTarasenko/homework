function myBind (fn, context, ...bindArgs) {
    return function (...args) {
        return fn.call(context, ...bindArgs, ...args);
    };
}
myBind();