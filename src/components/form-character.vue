<template>
    <div>
        <form @submit.prevent="enviarFormulario">
            <InputText type="text" v-model="character.name" />
            <InputText type="text" v-model="character.species" />
            <InputText type="text" v-model="character.age" />
            <InputText type="text" v-model="character.profession" />
            <Button type="submit" label="Submit"/>
        </form>

    </div>
</template>

<script>

export default {
  name: 'form-character',
  data() {
      return {
          character: {
              name: '',
              species: '',
              age: '',
              profession: ''
          }
      }
  },
  methods: {
      enviarFormulario() {
          console.log('Funciona!');
      },
  }
}

</script>

<style>

</style>
