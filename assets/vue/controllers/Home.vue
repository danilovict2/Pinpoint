<template>
    <div class="navbar">
        <button class="about-us-btn">O NAMA</button>
        <img src="/img/logo.png" alt="logo" class="logo">
        <div class="login-signup">
            <button @click="toggleLoginModal" type="button" class="login">PRIJAVI SE</button>
            <button @click="toggleRegisterModal" type="button" class="signup">NAPRAVI NALOG</button>
        </div>
    </div>

    <div class="middle-section">
        <img src="/img/homepage-bg.jpg" class="middle-section-bg" alt="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod corporis ea accusantium assumenda aut
        deleniti commodi maiores tempore possimus nisi sit minus aliquid corrupti fugit doloribus, aspernatur ratione ut!
    </div>

    <LoginModal :modal-active="loginModalActive" @close="toggleLoginModal"></LoginModal>
    <RegisterModal :modal-active="registerModalActive" @close="toggleRegisterModal"></RegisterModal>
</template>

<script setup>
import { ref } from "vue";
import LoginModal from "../components/LoginModal.vue";
import RegisterModal from "../components/RegisterModal.vue";

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
.navbar {
    width: 100%;
    position: sticky;
    background-color: #0f1e22;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    top: 0;
    box-shadow: 0px 5px 10px rgb(0, 0, 0);
}

.middle-section {
    position: relative;
}

.middle-section-bg {
    width: 100%;
    height: 800px;
    object-fit: cover;
}

.about-us-btn {
    font-weight: 550;
    font-size: 15px;
    letter-spacing: -0.5px;
    color: #9e9e9e;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    margin-left: 60px;
    margin-right: 150px;
    transition: 0.2s ease-in-out;
}

.about-us-btn:hover {
    background-color: #3d4142b0;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
}

.about-us-modal {
    display: none;
}

.logo {
    font-size: 30px;
    width: 400px;
    height: 60px;

}

.login-signup {
    flex-shrink: 0;
}

.login-signup button {
    border-radius: 5px;
    outline: none;
    color: white;
    font-size: 18px;
    padding: 8px;
    font-weight: 600;
    margin-right: 15px;
    cursor: pointer;
}

.signup {
    background-color: #b7b7b701;
    border: 1px solid white;
    transition: 0.2s ease-in-out;
}

.signup:hover {
    background-color: #b7b7b777;
    transition: 0.2s ease-in-out;
}

.login {
    background-color: #338ad7;
    border: none;
    transition: 0.2s ease-in-out;
}
</style>