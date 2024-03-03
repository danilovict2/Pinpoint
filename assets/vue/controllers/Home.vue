<template>
    <div class="navbar">
        <button class="about-us-btn">O NAMA</button>
        <img src="/img/logo.png" alt="logo" class="logo">
        <div class="login-signup">
            <button @click="toggleModal" type="button" class="login">PRIJAVI SE</button>
            <button class="signup">NAPRAVI NALOG</button>
        </div>
    </div>

    <div class="modal">
        <Modal @close="toggleModal" :modalActive="modalActive">
            <div class="modal-content">
                <form action="">
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Lozinka" required>
                    <div class="login-buttons">
                        <a href="#">Zaboravili ste lozinku?</a>
                        <button class="login">PRIJAVI SE</button>
                    </div>
                    <div class="signup-section">
                        <h4 style="color: #9e9e9e; font-weight: 700;">Nemaš nalog? <span style="color: #338ad7; font-weight: 800; cursor: pointer;">Napravi nalog</span></h4>
                    </div>
                </form>
            </div>
        </Modal>
    </div>

    <div class="middle-section">
        <img src="/img/homepage-bg.jpg" class="middle-section-bg" alt="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod corporis ea accusantium assumenda aut
        deleniti commodi maiores tempore possimus nisi sit minus aliquid corrupti fugit doloribus, aspernatur ratione ut!
    </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import { ref } from "vue";
export default {
    name: "modal",
    components: {
        Modal,
    },
    setup() {
        const modalActive = ref(false);

        const toggleModal = () => {
            modalActive.value = !modalActive.value;
        };

        return { modalActive, toggleModal };
    },
};
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

.middle-section{
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

form{
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
}

input{
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

input:hover{
    border: 1px solid white;
}

input:focus{
    border: 1px solid #338ad7;
}

.login-buttons{
    display: flex;
    justify-content: space-between;
}

.login-buttons a, button{
    color: white;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
}

.signup-section{
    display: flex;
    justify-content: center;
    margin-top: 20px;
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

.login {
    background-color: #338ad7;
    border: none;
    transition: 0.2s ease-in-out;
}

.login:hover {
    background-color: #28669d;
    transition: 0.2s ease-in-out;
}

.signup {
    background-color: #b7b7b701;
    border: 1px solid white;
    transition: 0.2s ease-in-out;
}

.signup:hover {
    background-color: #b7b7b777;
    transition: 0.2s ease-in-out;
}</style>