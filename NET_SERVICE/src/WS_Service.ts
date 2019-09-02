
import Event = laya.events.Event;

export default class WS_Service {

    private _sock: Laya.Socket = null


    constructor() {

        this._sock = new Laya.Socket();
        this._sock.endian = Laya.Socket.BIG_ENDIAN;
        this._sock.on(Event.OPEN, this, this.OnConnectHandler);
        this._sock.on(Event.MESSAGE, this, this.OnMessageHandler);
        this._sock.on(Event.CLOSE, this, this.OnCloseHandler);
        this._sock.on(Event.ERROR, this, this.OnErrorHandler);

        this.init();
    }

    /**
	 * 移除socket的监听事件
	 */
    destroy(): void {

        this._sock.off(Event.OPEN, this, this.OnConnectHandler);
        this._sock.off(Event.MESSAGE, this, this.OnMessageHandler);
        this._sock.off(Event.CLOSE, this, this.OnCloseHandler);
        this._sock.off(Event.ERROR, this, this.OnErrorHandler);
        this._sock.close();
    }


    private init(): void {
        this.connect();
    }


    /**
     * 建立socket网络连接
     */
    public connect(): void {

        let ip: string = "ws://127.0.0.1";
        let port: string = "3000";

        if (!(this._sock.connected)) {
            this._sock.connectByUrl(ip + ":" + port);
        }
    }

    public OnConnectHandler(e: any): void {
        //连接成功后发送数据
        this._sock.send("发送给服务器的数据");
    }

    public OnCloseHandler(e: any): void {
        console.debug("连接关闭");
    }

    public OnErrorHandler(e: any): void {
        console.debug("连接出错");
    }

    public OnMessageHandler(msg: any): void {
        console.debug("收到消息::", msg);
    }
}