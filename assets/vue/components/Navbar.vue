<template>
    <div class="navbar">
        <img src="/img/logo.png" alt="logo" class="logo">
    </div>
</template>


<style>
.navbar {
    width: 100%;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0f1e22;
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
</style>