import { Injectable } from "@angular/core";
import { ApiService } from "./api-service";
import { Users } from "./Users";
import { Tools } from "./Tools";

@Injectable()
export class YBSS {

    constructor(
        private users: Users,
        private api: ApiService,
        private tools: Tools
    ) {

    }

    GetHouse(addrid, callback) {
        this.users.token().then(token => {
            this.api.GET("ybss/house", { token: token, addr_id: addrid })
                .then(data => {
                    // console.log(data);
                    if (data && data['data']) {
                        if (callback) {
                            callback(data['data']);
                        }
                    }
                })
                .catch(error => {
                    this.tools.showToast(error.message || "服务器出错了~");
                });
        });
    }

    GetAddress(addrid, callback) {
        this.users.token().then(token => {
            this.api.GET("ybss/scan", { token: token, addr_id: addrid })
                .then(data => {
                    // console.log(data);
                    if (data && data['data']) {
                        if (callback) {
                            callback(data['data']);
                        }
                    }
                })
                .catch(error => {
                    this.tools.showToast(error.message || "服务器出错了~");
                });
        });
    }

    GetArticles(cid, callback) {
        this.api.GET(`categories/${cid}/articles`, null)
            .then(data => {
                // console.log(data);
                if (data && data['data']) {
                    if (callback) {
                        callback(data['data']);
                    }
                }
            })
            .catch(error => {
                this.tools.showToast(error.message || "服务器出错了~");
            });
    }

    GetCategories(pid = null, callback) {
        this.api.GET(`categories`, { pid: pid })
            .then(data => {
                // console.log(data);
                if (data && data['data']) {
                    if (callback) {
                        callback(data['data']);
                    }
                }
            })
            .catch(error => {
                this.tools.showToast(error.message || "服务器出错了~");
            });
    }

    UpdateHouse(house_id, image, payload, callback) {
        let body = new FormData();
        if (image) {
            body.append("image", image, 'image.jpg')
        }
        body.append("payload", JSON.stringify(payload))
        this.users.token().then(token => {
            body.append("id", house_id);
            body.append("token", token)
            this.api.POST2("ybss/house/update", body)
                .then(res => {
                    if (callback) {
                        callback(res["data"]);
                    }
                })
                .catch(error => {
                    this.tools.showToast("服务器超时，请重试");
                });
        });
    }

    SaveObj(house_id, obj_id, className, payload, files = null, callback) {
        let body = new FormData();

        if (obj_id) {
            body.append("obj_id", obj_id);
        }

        body.append("payload", JSON.stringify(payload))
        this.users.token().then(token => {
            body.append("id", house_id);
            body.append("token", token)

            if (files) {
                this._addFiles(files, 0, body, () => {
                    this.api.POST2(`ybss/house/${className}/save`, body)
                        .then(res => {
                            if (callback) {
                                callback(res["data"]);
                            }
                        })
                        .catch(error => {
                            this.tools.showToast("服务器超时，请重试");
                        });
                });
            } else {
                this.api.POST2(`ybss/house/${className}/save`, body)
                    .then(res => {
                        if (callback) {
                            callback(res["data"]);
                        }
                    })
                    .catch(error => {
                        this.tools.showToast("服务器超时，请重试");
                    });
            }
        });
    }

    resolveFile(fileUri, body: FormData, callback) {
        window['resolveLocalFileSystemURL'](fileUri, (fileEntry) => {
            fileEntry.file((file) => {
                let reader = new FileReader();
                reader.onloadend = (e) => {
                    let the_file = new Blob([e.target['result']], { type: "image/jpeg" });
                    body.append("files", the_file, 'image.jpg');
                    alert("123");
                    if (callback) {
                        callback();
                    }
                    // 递归调用
                    // this._addFiles(files, index + 1, body, callback);
                };
                reader.readAsArrayBuffer(file);
            });
        });
    }

    _addFiles(files, index, body: FormData, callback) {
        if (index >= files.length) {
            if (callback) {
                callback();
            }
            return;
        }

        let fileUri = files[index];
        // alert(fileUri);
        window['resolveLocalFileSystemURL'](fileUri, (fileEntry) => {
            fileEntry.file((file) => {
                let reader = new FileReader();
                reader.onloadend = (e) => {
                    let the_file = new Blob([e.target['result']], { type: "image/jpeg" });
                    body.append("files[][file]", the_file, `image${index}.jpg`);
                    // 递归调用
                    this._addFiles(files, index + 1, body, callback);
                };
                reader.readAsArrayBuffer(file);
            });
        });
    }

    SaveEmp(company_id, obj_id, payload, callback) {
        this.users.token().then(token => {
            this.api.POST(`ybss/company/save_emp`,
                { token: token, id: company_id, emp_id: obj_id, payload: JSON.stringify(payload) })
                .then(res => {
                    if (callback) {
                        callback(res["data"]);
                    }
                })
                .catch(error => {
                    this.tools.showToast("服务器超时，请重试");
                });
        });
    }

}