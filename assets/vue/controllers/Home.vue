<template>
    <div @click.capture="setLoginModalActive(false); setRegisterModalActive(false);">
        <Navbar @toggle-login-modal="setLoginModalActive(true)" @toggle-register-modal="setRegisterModalActive(true)">
        </Navbar>

        <div class="middle-section">
            <img src="/img/homepage-bg.jpg" class="middle-section-bg" alt="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eos porro impedit quo ea velit et dolore autem voluptatibus, repudiandae possimus quasi doloremque sit temporibus officia cupiditate corrupti animi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus accusamus dolores facere obcaecati ab porro reprehenderit odit non, vitae possimus explicabo delectus sunt at nihil? Quos corporis beatae voluptatibus nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi vitae molestias quos, ullam adipisci atque porro nisi aliquid quia illo temporibus cumque sed, dignissimos nihil libero cum. Aliquam, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut expedita est tempore veniam fugit deserunt laboriosam. Itaque quisquam reiciendis voluptate eligendi, tempore maxime laboriosam odio, quis saepe repellendus sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam et repudiandae. Nihil est excepturi a commodi, reiciendis odit, perferendis nam facilis animi fugiat corporis quod blanditiis unde minima. Atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aspernatur saepe, ipsum tempore amet voluptas natus cupiditate voluptatibus officia, aperiam quidem incidunt modi iure quo eveniet, magni est sunt minus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cum veniam facilis aliquam totam recusandae maiores sed impedit illo explicabo ut. Nam excepturi, architecto laboriosam earum necessitatibus delectus doloribus labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error temporibus debitis ea, quo adipisci nihil odio perferendis est amet assumenda quos earum sunt similique mollitia natus? Amet quisquam dolorum sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem fuga ducimus, numquam commodi enim eaque ea aspernatur. Rerum velit labore corrupti reiciendis perferendis animi iusto possimus consequuntur nam officia?
        </div>

        <LoginModal :modal-active="loginModalActive" @close="setLoginModalActive(false)"></LoginModal>
        <RegisterModal :modal-active="registerModalActive" @close="setRegisterModalActive(false)"></RegisterModal>
    </div>
</template>

<script setup>
import { ref } from "vue";
import LoginModal from "../components/LoginModal.vue";
import RegisterModal from "../components/RegisterModal.vue";
import Navbar from '../components/Navbar.vue';

const loginModalActive = ref(false);
const registerModalActive = ref(false);

function setLoginModalActive(isActive) {
    loginModalActive.value = isActive;
}

function setRegisterModalActive(isActive) {
    registerModalActive.value = isActive;
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