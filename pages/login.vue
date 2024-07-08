<template>
  <div>
    <UContainer class="max:w-sm space-y-4">
      <p class="font-title">Login</p>

      <UFormGroup label="Email">
        <UInput placeholder="you@example.com" icon="i-heroicons-envelope" v-model="email" />
      </UFormGroup>
      <UFormGroup label="Password">
        <UInput icon="i-heroicons-lock-closed" type="password" v-model="password" />
      </UFormGroup>
      <UButton color="black" variant="solid" @click="DoLogin" :loading="working">Login</UButton>
    </UContainer>

    <pre>{{ email }} {{ password }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const working = ref(false)

const token = inject('token')

const DoLogin = async () => {
  working.value = true

  try {
    const headers = {
      'content-type': 'application/json'
    }
    const body = {
      email: email.value,
      password: password.value
    }
    console.log({ body })
    const result = await fetch('/api/users/login', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    const resultJSON = await result.json()
    console.log({ resultJSON })
    if (resultJSON.success) {
      /* @ts-ignore */
      token.value = password.value
      const userRole = resultJSON.role;
      router.push(`/${userRole}`);
      return
    }
    alert('Wrong username or password')
  } catch (e) {
    // afficher une erreur
    console.error(e)
  } finally {
    working.value = false
  }
}
</script>
