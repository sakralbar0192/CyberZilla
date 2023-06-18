<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="auto"
        >
            <v-card>
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        color="primary"
                        block
                        @click="closeDialog"
                    >
                        Close Dialog
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    const props = withDefaults(defineProps<{modelValue: boolean}>(), {
        modelValue: false
    })

    const emit = defineEmits<{
        (e: 'update:modelValue', value: boolean): void
    }>()

    const dialog = computed(() => props.modelValue )

    function closeDialog() {
        emit('update:modelValue', false)
    }
</script>
