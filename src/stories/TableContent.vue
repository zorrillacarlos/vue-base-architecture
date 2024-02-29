<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index" class="align-left">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(column, colIndex) in columns" :key="colIndex">
          {{ item[column.field] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
// Define las interfaces TableColumn y User
export interface TableColumn {
  label: string;
  field: string;
}

export interface User {
  [key: string]: any; // Firma de índice
  name: string;
  email: string;
  age: number;
}

// Define las props del componente
const props = defineProps<{
  columns: TableColumn[];
  items: User[];
}>();
const { columns, items } = props;
</script>

<style scoped>
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table th.align-left {
  text-align: left;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}
</style>
