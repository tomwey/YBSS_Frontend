import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Store {

    constructor(private store: Storage) {

    }

    getLogs(addrID, callback) {
        this.getItems(addrID + ":" + "log", callback);
    }

    addPeople(addrID, type, man, callback) {
        const key = addrID + ":" + type;
        man._state = "1";
        this.addItem(man, key, callback);
        const key2 = addrID + ":" + "log";
        this.addItem({
            name: "新增" + (type == 1 ? "实有人口" : "从业人员"),
            time: (new Date().getTime())
        }, key2, null);
    }

    removePeople(addrID, type, man, callback) {
        const key = addrID + ":" + type;
        this.getItems(key, (arr) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === man.name) {
                    arr[i]._state = 0;
                    break;
                }
            }
            this.store.set(key, JSON.stringify(arr))
                .then(() => {
                    this.addItem({
                        name: "注销" + (type == 1 ? "实有人口" : "从业人员"),
                        time: (new Date().getTime())
                    }, addrID + ":" + "log", () => {
                        if (callback) {
                            callback();
                        }
                    });
                });
        });
    }

    getPeople(addrID, type, callback) {
        const key = addrID + ":" + type;
        this.getItems(key, callback);
    }

    addCheck(addrID, check, callback) {
        const key = addrID + ":check";
        check._state = 1;
        this.addItem(check, key, callback);

        this.addItem({
            name: "新增日常检查",
            time: (new Date().getTime())
        }, addrID + ":" + "log", null);
    }

    removeCheck(addrID, check, callback) {
        const key = addrID + ":check";
        this.getItems(key, (arr) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].memo === check.memo) {
                    arr[i]._state = 0;
                    break;
                }
            }
            this.store.set(key, JSON.stringify(arr))
                .then(() => {


                    this.addItem({
                        name: "注销日常检查",
                        time: (new Date().getTime())
                    }, addrID + ":" + "log", () => {
                        if (callback) {
                            callback();
                        }
                    });
                });
        });
    }

    getChecks(addrID, callback) {
        this.getItems(addrID + ":check", callback);
    }

    addItem(item, key, callback) {
        if (!item) return;

        this.getItems(key, (data) => {
            let arr = data || [];
            arr.push(item);
            this.saveItems(key, arr, callback);
        });
    }

    getItems(key, callback) {
        this.store.get(key).then(data => {
            let arr;
            if (!data) {
                arr = [];
            } else {
                arr = JSON.parse(data);
            }
            if (callback) {
                callback(arr);
            }
        });
    }

    saveItems(key, value, callback) {
        if (!value) {
            this.store.remove(key);
        } else {
            console.log(value);
            console.log(key);

            this.store.set(key, JSON.stringify(value))
                .then(() => {
                    if (callback) {
                        callback(1);
                    }
                }).catch(err => {
                    console.log(err);
                    if (callback) {
                        callback(0);
                    }
                });
        }

    }
}

