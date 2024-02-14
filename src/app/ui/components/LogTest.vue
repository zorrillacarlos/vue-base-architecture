<template>
  <div>
    <div>
      <h2>Logs:</h2>
      <input type="text" v-model="newLogText" @keyup.enter="addNewLog" />
      <button @click="addNewLog">Add Log</button>
      <button @click="clearAllLogs">Clear All</button>
      <ul>
        <li v-for="message in logs" :key="message">{{ message }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLogger from '@/app/shared/composables/useLogger'
import { ref } from 'vue'

const newLogText = ref<string>('')
const { logs, addLog, clearLogs } = useLogger()

// Método para agregar un nuevo log
const addNewLog = () => {
  if (newLogText.value.trim() !== '') {
    addLog(newLogText.value.trim())
    newLogText.value = ''
  }
}

// Método para borrar todos los logs
const clearAllLogs = () => {
  clearLogs()
}
</script>

<style lang="scss" scoped></style>
