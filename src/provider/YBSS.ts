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
            this.api.GET("/ybss/house", { token: token, addr_id: addrid })
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

}