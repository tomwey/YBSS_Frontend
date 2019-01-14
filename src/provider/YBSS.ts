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

    UpdateHouse(house_id, image, payload, callback) {
        let body = new FormData();
        if (image) {
            body.append("image", image)
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
        if (files) {
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                body.append("files[][file]", file);
            }
        }
        if (obj_id) {
            body.append("obj_id", obj_id);
        }

        body.append("payload", JSON.stringify(payload))
        this.users.token().then(token => {
            body.append("id", house_id);
            body.append("token", token)
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