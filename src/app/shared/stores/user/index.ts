// create a store to save data and share between all application
// example:
/*
  export const userStore = defineStore('userStore', () => {
    const state = ref<IUserState | undefined>(undefined);

    // actions
    const saveUser = ({ id, name, surname }: IUserState): void => {
      state.value = {id, name, surname};
    }

    // getters
    const getUser = computed((): IUserState | undefined => {
      if (!state.value) return undefined;
      const userObjValues = state.value
      return { id: userObjValues.id, name: userObjValues.name, surname: userObjValues.surname };
    })

    return {
      state,
      saveUser,
      getUser
    }
  })
*/