import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

interface IInitialState {
    title: Ref<string>
    /**
     * changes the title
     * @param newTitle - new title
     */
    setTitle: (newTitle: string) => void
}

export const useMainStore = defineStore('main', (): IInitialState => {
    const title = ref('') // title on main page

    function setTitle(newTitle: string) {
        title.value = newTitle
    }

    return {
        title,
        setTitle
    }
})
