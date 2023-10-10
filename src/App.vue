<script setup>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
const router = useRouter()

const goToAbout = ()=>{
  console.log('Estoy yendo a About');
  
  router.push("/about")
}


const personas = ref([
  {id:1,nombre:"Juan"},
  {id:2,nombre:"Pedro"}
])

const goToDetails = (id)=> {
  const ruta = `/persona/${id}`
  console.log(ruta)
  router.push(ruta)
}
</script>

<template>
  <button @click="goToAbout()">About de forma programatica</button>
  <router-link to="/about">About</router-link>
  <h1>Estoy en App.vue</h1>

<a @click="goToDetails(persona.id)" v-for="(persona, index) in personas" :key="index">{{ persona.nombre }} - </a>

  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
