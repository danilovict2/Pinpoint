<template>
    <div @click.capture="setLoginModalActive(false); setRegisterModalActive(false);">
        <Navbar @toggle-login-modal="setLoginModalActive(true)" @toggle-register-modal="setRegisterModalActive(true)">
        </Navbar>

        <div class="middle-section">
            <img src="/img/homepage-bg.jpg" class="middle-section-bg" alt="">
            <div class="game-btns">
                <div class="standard-game">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="32" y1="53.1244" x2="32" y2="9.5674" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ce2857"/><stop offset="1" stop-color="#ce5a40"/></linearGradient></defs><path d="M32,10.0989A16.6349,16.6349,0,0,0,15.3651,26.7338c0,5.4373,2.7756,9.1825,5.9315,13.308l10.5418,13.85c.19.2471,3.66-4.3822,3.9544-4.7529q1.9962-2.5571,3.9543-5.1426c1.5494-2.0722,3.26-4.1064,4.7529-6.2642,2.3193-3.28,4.1349-6.7966,4.1349-10.9981A16.6349,16.6349,0,0,0,32,10.0989ZM32.01,33.93a7.6046,7.6046,0,1,1,7.6426-7.6045A7.6236,7.6236,0,0,1,32.01,33.93Z" fill="url(#a)"/><rect width="64" height="64" fill="none"/></svg>
                    </span>
                    <h2>Standardna igra</h2>
                </div>
                <div class="standard-game">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="32" y1="53.1244" x2="32" y2="9.5674" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ce2857"/><stop offset="1" stop-color="#ce5a40"/></linearGradient></defs><path d="M32,10.0989A16.6349,16.6349,0,0,0,15.3651,26.7338c0,5.4373,2.7756,9.1825,5.9315,13.308l10.5418,13.85c.19.2471,3.66-4.3822,3.9544-4.7529q1.9962-2.5571,3.9543-5.1426c1.5494-2.0722,3.26-4.1064,4.7529-6.2642,2.3193-3.28,4.1349-6.7966,4.1349-10.9981A16.6349,16.6349,0,0,0,32,10.0989ZM32.01,33.93a7.6046,7.6046,0,1,1,7.6426-7.6045A7.6236,7.6236,0,0,1,32.01,33.93Z" fill="url(#a)"/><rect width="64" height="64" fill="none"/></svg>
                    </span>
                    <h2>Standardna igra</h2>
                </div>
                <div class="standard-game">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="32" y1="53.1244" x2="32" y2="9.5674" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ce2857"/><stop offset="1" stop-color="#ce5a40"/></linearGradient></defs><path d="M32,10.0989A16.6349,16.6349,0,0,0,15.3651,26.7338c0,5.4373,2.7756,9.1825,5.9315,13.308l10.5418,13.85c.19.2471,3.66-4.3822,3.9544-4.7529q1.9962-2.5571,3.9543-5.1426c1.5494-2.0722,3.26-4.1064,4.7529-6.2642,2.3193-3.28,4.1349-6.7966,4.1349-10.9981A16.6349,16.6349,0,0,0,32,10.0989ZM32.01,33.93a7.6046,7.6046,0,1,1,7.6426-7.6045A7.6236,7.6236,0,0,1,32.01,33.93Z" fill="url(#a)"/><rect width="64" height="64" fill="none"/></svg>
                    </span>
                    <h2>Standardna igra</h2>
                </div>
                <div class="standard-game">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="32" y1="53.1244" x2="32" y2="9.5674" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ce2857"/><stop offset="1" stop-color="#ce5a40"/></linearGradient></defs><path d="M32,10.0989A16.6349,16.6349,0,0,0,15.3651,26.7338c0,5.4373,2.7756,9.1825,5.9315,13.308l10.5418,13.85c.19.2471,3.66-4.3822,3.9544-4.7529q1.9962-2.5571,3.9543-5.1426c1.5494-2.0722,3.26-4.1064,4.7529-6.2642,2.3193-3.28,4.1349-6.7966,4.1349-10.9981A16.6349,16.6349,0,0,0,32,10.0989ZM32.01,33.93a7.6046,7.6046,0,1,1,7.6426-7.6045A7.6236,7.6236,0,0,1,32.01,33.93Z" fill="url(#a)"/><rect width="64" height="64" fill="none"/></svg>
                    </span>
                    <h2>Standardna igra</h2>
                </div>
            </div>
            
        </div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eos porro impedit quo ea velit et dolore autem voluptatibus, repudiandae possimus quasi doloremque sit temporibus officia cupiditate corrupti animi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus accusamus dolores facere obcaecati ab porro reprehenderit odit non, vitae possimus explicabo delectus sunt at nihil? Quos corporis beatae voluptatibus nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi vitae molestias quos, ullam adipisci atque porro nisi aliquid quia illo temporibus cumque sed, dignissimos nihil libero cum. Aliquam, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut expedita est tempore veniam fugit deserunt laboriosam. Itaque quisquam reiciendis voluptate eligendi, tempore maxime laboriosam odio, quis saepe repellendus sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam et repudiandae. Nihil est excepturi a commodi, reiciendis odit, perferendis nam facilis animi fugiat corporis quod blanditiis unde minima. Atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aspernatur saepe, ipsum tempore amet voluptas natus cupiditate voluptatibus officia, aperiam quidem incidunt modi iure quo eveniet, magni est sunt minus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cum veniam facilis aliquam totam recusandae maiores sed impedit illo explicabo ut. Nam excepturi, architecto laboriosam earum necessitatibus delectus doloribus labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error temporibus debitis ea, quo adipisci nihil odio perferendis est amet assumenda quos earum sunt similique mollitia natus? Amet quisquam dolorum sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem fuga ducimus, numquam commodi enim eaque ea aspernatur. Rerum velit labore corrupti reiciendis perferendis animi iusto possimus consequuntur nam officia?

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

.game-btns {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 20px;
}

.standard-game{
    background-image: linear-gradient(to bottom, rgb(61, 203, 113), rgb(57, 155, 191));
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.middle-section-bg {
    width: 100%;
    height: 800px;
    object-fit: cover;
}
</style>