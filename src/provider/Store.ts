import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Store {

    constructor(private store: Storage) {

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

