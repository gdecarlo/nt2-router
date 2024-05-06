<template>
    <div>
        <h1>Persona {{ $route.params }}</h1>
        <samp>{{ persona  }}</samp>
        
    </div>
    <router-link to="/">Back</router-link>
</template>

<script setup>
import {onMounted,ref} from 'vue'
import axios from 'axios'
import {useRoute} from 'vue-router'
const route = useRoute()
const persona = ref({})

    onMounted(async () => {
        const resultado = await axios.get(`https://642506fe7ac292e3cff62f84.mockapi.io/persona/${route.params.id}`)
        persona.value = resultado.data
    })
</script>

<style lang="scss" scoped>

</style>