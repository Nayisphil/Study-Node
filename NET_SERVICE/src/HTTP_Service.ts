export default class HTTP_Service {

    constructor() {

        this.init();
    }

    private init(): void {
        let O_O: any = { "Uid": "test-1", "Res": -1, "Teams": [], "Rate": [], "Type": 0, "Tick": -1 };

        let http: Laya.HttpRequest = new Laya.HttpRequest();
        http.send("http://localhost:3000/Combat", O_O, "post", "json", ["Content-Type", "application/json"]);
    }
}