<template>
    <section class="hero is-success">
        <div class="hero-head">
            <header class="navbar">
                <div class="container">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <strong> Platzi Music</strong>
                        </div>
                    </div>

                    <div class="navbar-end navbar-menu">
                        <router-link to="/" class="navbar-item">Buscar</router-link>
                        <router-link to="about" class="navbar-item">Nosotros</router-link>
                    </div>
                </div>
            </header>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">Platzi Music</h1>
                <h2 class="subtitle">Canciones vuenisimas</h2>
                <Player />
            </div>
        </div>
    </section>
</template>

<script>
import Player from '@/components/Player.vue'
export default {
    components: { Player }
}
</script>