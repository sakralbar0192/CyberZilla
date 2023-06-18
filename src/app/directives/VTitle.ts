import { useMainStore } from 'app/store/main'
import { DirectiveBinding } from 'vue'

export default {
    mounted(
        element: HTMLElement,
        binding: DirectiveBinding<{title: string}>
    ) {
        const store = useMainStore()

        store.setTitle(binding.value.title)
    },
    name: 'title'
}
