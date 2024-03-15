<template>
    <Modal @close="toggleModal" :modal-active="modalActive">
        <div class="modal-content">
            <form action="">
                <input type="email" placeholder="Email" required>
                <input type="text" placeholder="Korisničko ime" required>
                <div class="input-and-icon">
                    <input :type="isShowingPassword ? 'text' : 'password'" placeholder="Lozinka" id="password" required>
                    <i class="fa-solid fa-lg" :class="isShowingPassword ? 'fa-eye-slash' : 'fa-eye'" style="color: #ffffff;" @click="isShowingPassword = !isShowingPassword"></i>
                </div>
                <div class="register-buttons">
                    <button class="register">NAPRAVI NALOG</button>
                </div>
            </form>
        </div>
    </Modal>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const isShowingPassword = ref(false);

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

input:hover, .input-and-icon:hover {
    border: 1px solid white;
}

input:focus {
    border: 1px solid #338ad7;
}

#password{
    border: none;
    width: 100%;
}

.input-and-icon i{
    cursor: pointer;
}

.input-and-icon{
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #9e9e9e;
    border-radius: 5px;
    justify-content: space-between;
    padding-right: 15px;
    transition: all 0.3s ease-in-out;
}

.register-buttons {
    display: flex;
    justify-content: space-between;
}

.register-buttons a,
button {
    color: white;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    margin-top: 20px;
}

.register {
    background-color: #338ad7;
    border: none;
    transition: 0.2s ease-in-out;
}

.register:hover {
    background-color: #28669d;
    transition: 0.2s ease-in-out;
}
</style>