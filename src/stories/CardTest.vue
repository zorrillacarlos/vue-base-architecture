<template>
  <div>
    <div class="card">
      <h4 class="tittle">{{ title }}</h4>
      <p class="secundary-text">{{ subtext }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { title, subtext } = defineProps({
  title: String,
  subtext: String,
});
</script>

<style scoped>
.card{
  background-color: #fff;
  border-radius: .2rem;
  box-shadow: rgb(150,150,150) 0px 1px 3px;
  width: 350px;
  padding: .8rem;
}
</style>
