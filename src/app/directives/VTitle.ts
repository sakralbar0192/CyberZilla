import { useMainStore } from 'app/store/main'
import { DirectiveBinding } from 'vue'

export default {
    /**
     * a custom directive that sets on component mount the value of the "title" property in the main store for use in the header on the main page
     *
     * @param element - the element on which the directive was used
     * @param binding - binded data
     */
    mounted(
        element: HTMLElement,
        binding: DirectiveBinding<{title: string}>
    ) {
        const store = useMainStore()

        store.setTitle(binding.value.title)
    },
    name: 'title'
}
