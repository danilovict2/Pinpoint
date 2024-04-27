<template>
    <div class="navbar">
        <div class="logo-spacer"></div>
        <img src="/img/logo.png" alt="logo" class="logo">
        <div class="login-signup">
            <button @click="emit('toggleLoginModal')" type="button" class="login">PRIJAVI SE</button>
            <button @click="emit('toggleRegisterModal')" type="button" class="signup">NAPRAVI NALOG</button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['toggleLoginModal', 'toggleRegisterModal']);

</script>


<style>
.navbar {
    width: 100%;
    position: sticky;
    background-color: #0f1e22;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    top: 0;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.479);
    z-index: 10;
}

.logo-spacer {
    padding: 10px;
    margin-left: 60px;
    margin-right: 240px;
}

.logo {
    font-size: 30px;
    width: 320px;
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

.login:hover{
    background-color: #1f71b9;
}
</style>