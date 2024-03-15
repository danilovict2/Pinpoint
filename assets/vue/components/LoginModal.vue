<template>
    <Modal @close="emit('close')" :modal-active="modalActive">
        <div class="modal-content">
            <form action="">
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Lozinka" required>
                <div class="login-buttons">
                    <a href="#">Zaboravili ste lozinku?</a>
                    <button class="login">PRIJAVI SE</button>
                </div>
            </form>
        </div>
    </Modal>
</template>

<script setup>
import Modal from './Modal.vue';

const emit = defineEmits(['close']);

defineProps({
    modalActive: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
}

input {
    padding: 10px;
    font-size: medium;
    border: 1px solid #9e9e9e;
    border-radius: 5px;
    background: none;
    color: white;
    transition: all 0.3s ease-in-out;
    outline: none;
    box-sizing: border-box;
}

input:hover {
    border: 1px solid white;
}

input:focus {
    border: 1px solid #338ad7;
}

.login-buttons {
    display: flex;
    justify-content: space-between;
}

.login-buttons a,
button {
    color: white;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    margin-top: 20px;
}

.login {
    background-color: #338ad7;
    border: none;
    transition: 0.2s ease-in-out;
}

.login:hover {
    background-color: #28669d;
    transition: 0.2s ease-in-out;
}
</style>