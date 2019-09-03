import Router from './router'

const router = new Router

router.route('5', (payload) => {
    console.log('处理5的函数')
})

router.route('6', (payload) => {
    console.log('处理6的函数')
})

router.route('7', (payload) => {
    console.log('处理7的函数')
})

router.route('8', (payload) => {
    console.log('处理8的函数')
})

export default router