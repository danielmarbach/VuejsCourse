<template>
    <div>
        <app-header />
    </div>
    <div class="container">
        <UserProfile 
            :name="data.name"
            lastname="Marbach" />
    </div>
    <Footer/>
</template>

<script setup>
    import Footer from '@/components/header_footer/footer.vue';
    import UserProfile from '@/components/user/profile.vue';

    import { reactive } from 'vue';

    const data = reactive({
        name: 'Daniel'
    });
</script>