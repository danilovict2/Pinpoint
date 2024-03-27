<template>
    <Teleport to="body">
        <transition name="modal-animation">
            <div v-show="modalActive" class="modal">
                <transition name="modal-animation-inner">
                    <div v-show="modalActive" class="modal-inner">
                        <div class="close-icon">
                            <div @click="emit('close')" class="icon-circle">
                                <i class="fa-solid fa-xmark" style="cursor: pointer;"></i>
                            </div>
                        </div>
                        <slot />
                    </div>
                </transition>
            </div>
        </transition>
    </Teleport>
</template>

<script setup>
defineProps({
    modalActive: Boolean
});

const emit = defineEmits(['close']);
</script>

<style scoped>
.icon-circle{
    display: none;
    background-color: none;
    cursor: pointer;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1px;
    padding-left: 1px;
    transition: 0.2s;
}

.icon-circle:hover{
    background-color: rgba(199, 199, 199, 0.27);
    transition: 0.2s all ease-in;
}
.icon-circle:active{
    background-color: rgba(255, 255, 255, 0.655);
    transition: 0.1s all ease-in;
} 

.close-icon {
    display: flex;
    justify-content: right;
    margin-right: 10px;
    margin-top: 100px;
    padding-top: 40px;
    padding-right: 15px;
    font-size: 25px;
    color: white;
    align-items: center;
}

.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}

.modal-inner {
    background-color: #1e1e1e;
    width: 450px;
    height: 350px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.538);
}

.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity 0.2s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal-animation-inner-enter-active {
    transition: all 0.2s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
    transition: all 0.2s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.modal-animation-inner-leave-to {
    transform: scale(0.8);
}
</style>