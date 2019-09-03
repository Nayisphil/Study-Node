import Router from './router'

const router = new Router

router.route('1', (payload) => {
    console.log('处理1的函数')
})

router.route('2', (payload) => {
    console.log('处理3的函数')
})

router.route('3', (payload) => {
    console.log('处理4的函数')
})

router.route('4', (payload) => {
    console.log('处理4的函数')
})

export default router