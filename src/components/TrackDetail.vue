<template>
<div class="container">
    <div class="columns">
        <div class="column is-3 hax-text-centered">
            <figure class="media-left">
                <p class="image">
                    <img :src="track.album.images[0].url" alt="">
                </p>
                <p class="button-bar">
                    <a class="button is-primary">
                        <span class="icon" @click="selectTrack">▶</span>
                    </a>
                </p>
            </figure>
        </div>

        <div class="column is-8">
            <div class="panel">
                <div class="panel-heading">
                    <h1>{{ trackTitle }}</h1>
                </div>
                <div class="panel-block">
                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <ul v-for="(v, k) in track" :key="k">
                                    <li>{{ k }}: &nbsp; <span>{{ v }}</span></li>
                                </ul>
                            </div>

                            <nav class="level">
                                <div class="level-left">
                                    <a href="" class="level-item"></a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import trackMixin from '@/mixins/track'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    mixins: [ trackMixin ],
    computed: {
        ...mapState(['track']),
        ...mapGetters(['trackTitle'])
    },
    created(){
        const id = this.$route.params.id
        if(!this.track || !this.track.id || this.track.id != id){
            this.getTrackById({ id })
                .then(() => {
                     console.log('track loaded')
                })
        }
    },
    methods: {
        ...mapActions(['getTrackById'])
    }
}
</script>