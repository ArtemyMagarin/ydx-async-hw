"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = function (o) {
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    function getDeferred() {
        const d = {};
        d.promise = new Promise((r) => {
            d.resolve = r;
        });
        return d;
    }
    function getLength(array) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = getDeferred();
            array.length(d.resolve);
            return d.promise;
        });
    }
    function getItem(array, index) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = getDeferred();
            array.get(index, d.resolve);
            return d.promise;
        });
    }
    function less(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = getDeferred();
            o.less(a, b, d.resolve);
            return d.promise;
        });
    }
    function add(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = getDeferred();
            o.add(a, b, d.resolve);
            return d.promise;
        });
    }
    return (array, fn, initialValue, cb) => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const length = yield getLength(array);
            let acc = initialValue;
            let i = 0;
            while (yield less(i, length)) {
                const item = yield getItem(array, i);
                const d = getDeferred();
                fn(acc, item, i, array, d.resolve);
                acc = yield d.promise;
                i = yield add(i, 1);
            }
            cb(acc);
        }))();
    };
};
