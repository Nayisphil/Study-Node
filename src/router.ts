class Router {

    private routeTable = {}

    public route(identifier, handler) {
        if (this.routeTable[identifier]) {
            throw new Error('当前Identifier已存在：' + identifier)
        }
        this.routeTable[identifier] = handler
    }

    public canHandle(identifier) {
        return !!this.routeTable[identifier]
    }

    public handle(identifier, payload) {
        const handler = this.routeTable[identifier]
        if (!handler) {
            throw new Error('当前Identifier无法处理：' + identifier)
        }
        handler(payload)
    }

}

export default Router