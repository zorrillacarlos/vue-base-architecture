<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import type { IUserUseCase } from '@modules/user/application/interfaces/userUseCase'
import LogTest from '@/app/ui/components/LogTest.vue'
import CardTest from '../ui/stories-ui/CardTest.vue'

const useUser = inject<IUserUseCase>('useUser') as IUserUseCase
const fullMessage = ref<string>('')

onMounted(async () => {
  const fullname = await useUser.createUser({
    name: 'Giuseppe',
    surname: 'Caso',
    username: 'UserNameGiuseppe',
    email: 'giuseppe2@gmail.com',
    createAt: new Date(Date.now())
  })

  fullMessage.value = `${fullname}`
})
</script>

<template>
  <div class="wrapper">
    <div>New created user: {{ fullMessage }}</div>
    <LogTest />
    <CardTest title="Titulo" subtext="Hola Mundo"/>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
@/app/shared/composables/useLogger
