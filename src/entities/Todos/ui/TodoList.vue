<template>
    <v-list
        lines="two"
    >
        <v-list-item
            v-for="todo in props.todos"
            :key="todo.id"
            :value="todo.todo"
            @click="todo.completed = !todo.completed"
        >
            <template #prepend>
                <v-list-item-action start>
                    <v-checkbox-btn :model-value="todo.completed" />
                </v-list-item-action>
            </template>

            <v-list-item-title>{{ todo.todo }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script setup lang="ts">
    import { ITodoItem } from '../types'

    const props = withDefaults(
        defineProps<{
            todos: ITodoItem[]
        }>(), {}
    )
</script>
