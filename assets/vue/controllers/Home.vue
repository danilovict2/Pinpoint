<template>
    <Navbar @toggle-login-modal="toggleLoginModal" @toggle-register-modal="toggleRegisterModal"></Navbar>

    <div class="middle-section">
        <img src="/img/homepage-bg.jpg" class="middle-section-bg" alt="">
    </div>

    <LoginModal :modal-active="loginModalActive" @close="toggleLoginModal"></LoginModal>
    <RegisterModal :modal-active="registerModalActive" @close="toggleRegisterModal"></RegisterModal>
</template>

<script setup>
import { ref } from "vue";
import LoginModal from "../components/LoginModal.vue";
import RegisterModal from "../components/RegisterModal.vue";
import Navbar from '../components/Navbar.vue';

const loginModalActive = ref(false);
const registerModalActive = ref(false);

function toggleLoginModal() {
    loginModalActive.value = !loginModalActive.value; 
}

function toggleRegisterModal() {
    registerModalActive.value = !registerModalActive.value; 
}
</script>

<style scoped>
.middle-section {
    position: relative;
}

.middle-section-bg {
    width: 100%;
    height: 800px;
    object-fit: cover;
}
</style>