import { ref } from 'vue'
type Ref<T> = import('vue').Ref<T>

interface Logger {
  logs: Ref<string[]>
  log: (message: string) => void
  clearLogs: () => void
  addLog: (message: string) => void
}

export default function useLogger(): Logger {
  const logs = ref<string[]>(['Log 1', 'Log 2', 'Log 3'])

  function log(message: string) {
    logs.value.push(message)
    console.log(`[Logger]: ${message}`)
  }

  function clearLogs() {
    logs.value = []
  }

  function addLog(message: string) {
    logs.value.push(message)
  }

  return {
    logs,
    log,
    clearLogs,
    addLog
  }
}
