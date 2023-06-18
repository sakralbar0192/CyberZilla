import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

interface IBreadcrumb {
    title: string
    disabled: boolean
    href: string
}

interface IInitialState {
    title: Ref<string>
    setTitle: (newTitle: string) => void,
    breadCrumbs: Ref<IBreadcrumb[]>,
    addCrumb: (crumb: IBreadcrumb) => void
    removeLastCrumb: () => void
}

export const useMainStore = defineStore('main', (): IInitialState => {
    const title = ref('')
    const breadCrumbs: Ref<IBreadcrumb[]> = ref([])

    function setTitle(newTitle: string) {
        title.value = newTitle
    }

    function addCrumb(crumb: IBreadcrumb) {
        breadCrumbs.value = [...breadCrumbs.value, crumb]
    }

    function removeLastCrumb() {
        const oldArray = [...breadCrumbs.value]
        oldArray.pop()
        breadCrumbs.value = [...oldArray]
    }

    return {
        title,
        setTitle,
        breadCrumbs,
        addCrumb,
        removeLastCrumb
    }
})
