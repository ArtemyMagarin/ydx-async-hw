"use strict";
module.exports = function (o) {
    function getDeferred() {
        const d = {};
        d.promise = new Promise((r) => {
            d.resolve = r;
        });
        return d;
    }
    async function getLength(array) {
        const d = getDeferred();
        array.length(d.resolve);
        return d.promise;
    }
    async function getItem(array, index) {
        const d = getDeferred();
        array.get(index, d.resolve);
        return d.promise;
    }
    async function less(a, b) {
        const d = getDeferred();
        o.less(a, b, d.resolve);
        return d.promise;
    }
    async function add(a, b) {
        const d = getDeferred();
        o.add(a, b, d.resolve);
        return d.promise;
    }
    return (array, fn, initialValue, cb) => {
        (async () => {
            const length = await getLength(array);
            let acc = initialValue;
            let i = 0;
            while (await less(i, length)) {
                const item = await getItem(array, i);
                const d = getDeferred();
                fn(acc, item, i, array, d.resolve);
                acc = await d.promise;
                i = await add(i, 1);
            }
            cb(acc);
        })();
    };
};
