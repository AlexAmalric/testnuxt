


<template>
  <div>
    <div>'{{ token }}'</div>

    <div class="text-center">
      <!-- <div class="w-lg inline-block p-8"> -->
      <div class="w-lg inline-block text-lg text-gray-600 dark:text-gray-300">
        <p class="font-body text-md m-6">Welcome to the XRPL Serious Game</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const token = inject('token')

onMounted(() => {
  console.log({ token })
  /* @ts-ignore */
  if (token.value === null) {
    // redirect to /login
    router.push('/login')
  }
})


</script>


<style></style>