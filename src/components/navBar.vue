<template>
    <nav>
        <div class="computer-navbar">
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
    </div>
    <div class="mobile-navbar" style="display:none;">
        <a class="hamburger-menu-icon" v-on:click="eventNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </a>
        <div class="links-mobile-navbar" style="display:none;">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/docenten">Docenten</router-link></li>
            <li><router-link to="/zanglessen">Zanglessen</router-link></li>
            <li><router-link to="/prijzen">Prijzen</router-link></li>
            <li><router-link to="/Contact">Contact</router-link></li>
        </div>
    </div>
    </nav>
    <main>
        <router-view></router-view>
    </main>
</template>
<script>
export default {
  methods: {
    eventNavbar(event) {
        let navbar = document.querySelector(".links-mobile-navbar");
        if (navbar.style.display === "none") {
            navbar.style.display = "block";
            } else {
            navbar.style.display = "none";
        }
    }
  }
}
</script>
