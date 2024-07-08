<template>
    <div>
      <div class="mb-4">
        <UButton color="primary" variant="solid" @click="onAddUser">Add User</UButton>
      </div>
  
      <div v-if="loading">Loading...</div>
      <div v-else>
        <UTable :rows="users" :columns="columns">

    <template #actions-data="{ row }">
        <UButton color="gray" variant="ghost" label="Delete" @click="deleteUser(row.email)" />
    </template>
  </UTable>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { AdminAddUser } from '#components'  
const toast = useToast()
const modal = useModal()
function onAddUser () {
  toast.add({
        title: 'TEST !',
        id: 'modal-success'
      })
  modal.open(AdminAddUser, {
    async onSuccess (state : any) {
      console.log(state,'celui de users.vue')
      await insertUser(state)
      toast.add({
        title: 'Success !',
        id: 'modal-success'
      })
      modal.close()
    }
  })
}
const insertUser = async (user: any) => {
  try {
    const headers = {
      'content-type': 'application/json'
    }
    const body = JSON.stringify(user)
    const result = await fetch('/api/users/', {
      method: 'POST',
      headers,
      body})

    const resultJSON = await result.json()
    console.log({ resultJSON })

  } catch (error) {
    console.error('Error adding user:', error);
  } finally {
    fetchUsers();
  }
}
const columns = [{
  key: 'name',
  label: 'Name'
}, {
  key: 'email',
  label: 'Email'
}, {
  key: 'role',
  label: 'Role'
}, {
  key: 'actions'
}]


import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { User } from '~/server/connectors/mongo'; 

const users = ref<User[]>([]);
const loading = ref<boolean>(true);
const router = useRouter();

const fetchUsers = async () => {
  try {

    loading.value = true;
    const headers = {
      'content-type': 'application/json'
    }
    const result = await fetch('/api/users/', {
      method: 'GET',
      headers,
    })

    const userList: User[] = [];
    const cursor = await result.json();
    console.log({ cursor })

    await cursor.forEach((doc: User) => {
      const user: User = {
        email: doc.email,
        name: doc.name,
        password: doc.password,
        role: doc.role
      };
      userList.push(user);
    });

    users.value = userList;
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loading.value = false;
  }
};

const deleteUser = async (email: string) => {
  if (confirm('Are you sure you want to delete this user?')) {
    try {
      const headers = {
      'content-type': 'application/json'
    }
    const body = {
      email,
    }
    console.log({ body })
    const result = await fetch('/api/users', {
      method: 'DELETE',
      headers,
      body: JSON.stringify(body)
    })

      
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
};

// const navigateToAddUser = () => {
//   router.push('/add-user'); 
// };
definePageMeta({
  layout: 'admin',
})
fetchUsers();

  </script>
  
  
  