<template>
    <div class="navbar">
        <button class="about-us-btn">O NAMA</button>
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
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.479);
    z-index: 10;
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