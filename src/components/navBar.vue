<template>
    <div>
        <img class="logo-navbar" src="../assets/images/zangvogel.png" alt="logo">
        <div class="title">
            <p>Zangschool De Nachtegaal</p>
        </div>
        <div class="navbar">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/docenten">Docenten</router-link></li>
            <li><router-link to="/zanglessen">Zanglessen</router-link></li>
            <li><router-link to="/prijzen">Prijzen</router-link></li>
            <li><router-link to="/Contact">Contact</router-link></li>
        </div>
        <router-view></router-view>
    </div>
</template>
