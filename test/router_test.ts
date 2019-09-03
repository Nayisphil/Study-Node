import moduleARouter from '../src/module_a'
import moduleBRouter from '../src/module_b'

const routers = [moduleARouter, moduleBRouter]

function handler({ identifier, payload }) {

    for (const rt of routers) {
        if (rt.canHandle(identifier)) {
            rt.handle(identifier, payload)
        }
    }
}


handler({ identifier: '1', payload: {} })
handler({ identifier: '2', payload: {} })
handler({ identifier: '3', payload: {} })
handler({ identifier: '4', payload: {} })
handler({ identifier: '5', payload: {} })
handler({ identifier: '6', payload: {} })