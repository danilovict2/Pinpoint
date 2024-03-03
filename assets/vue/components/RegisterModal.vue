<template>
    <Modal @close="toggleModal" :modal-active="modalActive">
        <h1>REGISTRACIJA</h1>
    </Modal>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

defineProps({
    modalActive: {
        type: Boolean,
        default: false
    }
});
</script>