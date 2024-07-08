<script setup lang="ts">
import { useRoute } from 'vue-router';

const links = [{
  label: 'Dashboard',
  to: `/admin/dashboard`
}, {
  label: 'List of Users',
  to: '/admin/users'
}, {
  label: 'Log out',
  to: '/login',
  click : async () => {
    alert('You have been logged out');
  }
}];
</script>

<template>
  <div class="flex justify-center items-center w-full top-10 shadow-md fixed">
    <div class="flex justify-center h-16 items-center">
      <UHorizontalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
    </div>
  </div>
</template>
