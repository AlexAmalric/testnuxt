<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UModals />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
const token = ref(null)

provide('token', token)
</script> 


<!-- app.vue

<template>
  <NuxtLayout>
    <NuxtPage />
    <footer class="footer">
      <p>© 2024 Votre Nom / Entreprise. Tous droits réservés.</p>
    </footer>
  </NuxtLayout>
  <UModals />

</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
const token = ref(null)

provide('token', token)</script>

<style scoped>
.footer {
  background-color: #000000;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style> -->
