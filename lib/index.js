"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this._store = [];
    }
    Queue.prototype.enqueue = function (val) {
        this._store.push(val);
    };
    Queue.prototype.dequeue = function () {
        return this._store.shift();
    };
    Queue.prototype.getLength = function () {
        return this._store.length;
    };
    Queue.prototype.isEmpty = function () {
        if (this._store.length > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Queue.prototype.peek = function () {
        return this._store[0];
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=index.js.map