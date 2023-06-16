import { useAppStore } from 'app/store/app'

const store = useAppStore()

export default {
    data() {
        return {
            msg: 'UserList'
        }
    },
    computed: {
        doubleValue() {
            return store.doubleCount
        },
        count() {
            return store.count
        }
    },
    methods: {
        clickHandler() {
            store.increment()
        }
    }
}
