<template>
  <main>
    <transition name="move">
      <Notification v-show="showNotification">
        <p slot="body">No se encontraron resultados</p>
      </Notification>
    </transition>
    <transition name="move">
      <Loader v-show="isLoading"/>
    </transition>
    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar canciones" v-model="searchQuery">
          <a href="" @click.prevent="search" class="button is-info is-large">Buscar</a>
          <a href="" class="button is-danger is-large">&times;</a>
          <p>
            <small>{{ searchMessage }}</small>
          </p>
        </div>
      </nav>

      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks" :key="t.id">
            <Track 
              v-blur="t.preview_url"
              :track="t" 
              @select="setSelectedTrack"
              :class="{ 'is-active' : t.id === selectedTrack }"
              />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import trackService from '@/services/track';
import Track from '@/components/Track.vue'
import Loader from '@/components/shared/Loader.vue'
import Notification from '@/components/shared/Notification.vue'

export default {
  components: { Track, Loader, Notification },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    };
  },
  methods: {
    search(){
      //this.tracks = tracks
      if(!this.searchQuery){ return }

      this.isLoading = true
      trackService.search(this.searchQuery)
        .then( res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items 
          this.isLoading = false
        })
    },
    setSelectedTrack(id){
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage(){
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  watch: {
    showNotification(){
      if(this.showNotification){
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
};
</script>

<style lang="scss">

.is-active{
  border: 3px solid #23d160;
}

</style>
