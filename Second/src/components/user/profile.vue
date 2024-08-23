<template>
    <div class="user_profile">
        <h3>User profile</h3>
        <ul>
            <li>
                <span>Name:</span> {{ name }}
            </li>
            <li>
                <span>Name:</span> {{ lastname }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['name','lastname']);
</script>

<style scoped>
 span {
    font-weight: 800;
 }

 .user_profile {
    border: 1px;
 }
</style>