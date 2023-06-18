<template>
    <ul :class="$style.list">
        <li
            v-for="user of props.users"
            :key="user.id"
        >
            <UserCard
                :user="user"
                @modify-user="modifyUser"
            />
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { PropType } from 'vue'
    import { IUserItem } from '../types'
    import UserCard from 'entities/Users/ui/UserCard.vue'

    const props = defineProps({
        users: {
            type: Object as PropType<IUserItem[]>,
            required: true
        }
    })

    const emit = defineEmits<{
        (e: 'modify-user', value: IUserItem): void
    }>()

    function modifyUser(user: IUserItem) {
        emit('modify-user', user)
    }
</script>

<style module lang="scss">
    .list {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            flex-grow: 1;
            margin: 5px;
        }
    }
</style>

