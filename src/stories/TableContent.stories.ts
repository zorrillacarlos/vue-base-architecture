import { ref } from 'vue';
import { defineComponent } from 'vue';
import TableContent from './TableContent.vue';

export default {
  title: 'Componentes/TableContent',
  component: TableContent,
};

const Template = (args : any) => defineComponent({
  components: { TableContent },
  setup() {
    // Aquí se pueden definir datos reactivos o computados si es necesario
    const userData = ref(args.userData);
    return { args, userData };
  },
  template: `
    <div>
      <h2>Lista de Usuarios</h2>
      <TableContent :columns="args.tableColumns" :items="userData" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  tableColumns: [
    { label: 'Name', field: 'name' },
    { label: 'Email', field: 'email' },
    { label: 'Age', field: 'age' },
  ],
  userData: [
    { name: 'Juan', email: 'juan@example.com', age: 30 },
    { name: 'Maria', email: 'maria@example.com', age: 25 },
    { name: 'Pedro', email: 'pedro@example.com', age: 35 },
  ],
};
