<template>
    <div @click.capture="setLoginModalActive(false); setRegisterModalActive(false);">
        <Navbar @toggle-login-modal="setLoginModalActive(true)" @toggle-register-modal="setRegisterModalActive(true)">
        </Navbar>

        <div class="middle-section">
            <img src="/img/homepage-bg.jpg" class="middle-section-bg" alt="">
            <div class="game-btns">
                <a class="standard-game" href="/play">
                    <span>
                        <i class="fa-solid fa-location-dot fa-2xl" style="color: #ffffff; font-size: 50px;"></i>
                    </span>
                    <h2>Standardna igra</h2>
                </a>
                <div class="country-game">
                    <span>
                        <i class="fa-solid fa-earth-americas" style="color: #ffffff; font-size: 50px;"></i>
                    </span>
                    <h2>Pogodi državu</h2>
                </div>
                <div class="flag-game">
                    <span>
                        <i class="fa-solid fa-flag fa-2xl" style="color: #ffffff; font-size: 45px;"></i>
                    </span>
                    <h2>Zastave sveta</h2>
                </div>
            </div>
            
        </div>
        <div class="bottom-section">
            <div class="about-us">
                <h1>ŠTA JE PINPOINT?</h1>
                <p class="about-us-content">
                    Pinpoint je zabavna i edukativna geografska igra koja pruža igračima jedinstveno iskustvo istraživanja sveta kroz Google Street View. U ovoj igri, igrači su nasumično spušteni na različite lokacije širom sveta, gde se mogu kretati kroz panoramske prikaze ulica i istraživati okolinu. <br>Cilj igre je da igrači koriste vizuelne informacije koje prikazuju ulice, zgrade, pejzaži i ostali detalji kako bi identifikovali gde se nalaze na svetskoj mapi.Igrači mogu koristiti različite tehnike i strategije kako bi pokušali da odrede svoju tačnu lokaciju. To može uključivati prepoznavanje poznatih znamenitosti, jezičkih znakova, tipične arhitekture ili geografskih karakteristika određene regije. Nakon što igrači donesu svoje zaključke, mogu postaviti oznaku na mapi kao njihovu zvaničnu procenu. <br><br>Ova igra ne samo što pruža zabavu i izazov, već takođe može biti korisna za poboljšanje geografskog znanja i sposobnosti opažanja detalja. Kroz istraživanje različitih delova sveta, igrači mogu naučiti o različitim kulturama, geografskim karakteristikama i znamenitostima, što ih čini bolje informisanim o globalnoj geografiji.
                </p>
            </div>
            
        </div>
        <img src="/img/map-photo.png" class="map-photo">
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

i{
    border: 1px solid white;
    border-radius: 100%;
    padding: 50px;
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.standard-game:hover, 
.country-game:hover, 
.flag-game:hover{
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
}

.standard-game{
    background-image: linear-gradient(to bottom, rgb(57, 210, 113), rgb(30, 141, 182));
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 220px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    text-decoration: none;
}

.country-game{
    background-image: linear-gradient(to bottom, rgb(45, 113, 197), rgb(112, 61, 179));
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 220px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
}

.flag-game{
    background-image: linear-gradient(to bottom, rgb(183, 177, 56), rgb(191, 80, 80));
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 220px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
}

.middle-section-bg {
    width: 100%;
    height: 800px;
    object-fit: cover;
    box-shadow: 0px 20px 23px -6px rgba(26, 26, 26, 0.68);
}

.bottom-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
}

.map-photo{
    float: right;
    margin-top: -600px;
    margin-right: -180px;
    transform: rotate(-10deg);
}

@media screen and (max-width: 1500px) {
    .map-photo{
        margin-right: -300px;
    }
}

@media screen and (max-width: 1125px) {
    .map-photo{
        display: none;
    }

    .about-us{
        font-size: 25px;
    }

    p{
        font-size: 40px;
        width: 150%;
        margin-left: -100px;
    }
}

@media screen and (min-width: 1125px) {
    p{
        font-size: 23px;
    }
}

h1{
    text-align: center;
    font-weight: bold;
    border: none;
}

.about-us{
    color: white;
    width: 50%;
}
</style>