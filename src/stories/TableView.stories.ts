import type { Story } from '@storybook/vue3';
import TableView from './TableView.vue';

// Definimos un título y el componente asociado
export default {
  title: 'Components/TableView',
  component: TableView,
};

// Creamos un Template para renderizar el componente en Storybook
const Template: Story = (args) => ({
  components: { TableView },
  setup() {
    return { args };
  },
  // Pasamos los argumentos al componente usando v-bind
  template: '<TableView v-bind="args" />',
});

// Exportamos una historia llamada "Default" que usa el Template y define los argumentos
export const Default = Template.bind({});
Default.args = {
  // Aquí puedes definir las propiedades que deseas pasar al componente TableView
  // Por ejemplo:
  userData: [
    { name: 'Juan', email: 'juan@example.com', age: 30 },
    { name: 'Maria', email: 'maria@example.com', age: 25 },
    { name: 'Pedro', email: 'pedro@example.com', age: 35 },
  ],
  tableColumns: [
    { label: 'Name', field: 'name' },
    { label: 'Email', field: 'email' },
    { label: 'Age', field: 'age' },
  ],
};
