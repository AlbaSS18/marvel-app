<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <list-character :characters="characters"></list-character>
</template>

<script>
import ListCharacter from '@/components/list-character.vue'

export default {
  name: 'app',
  data() {
    return {
      characters: [
        {
          id: 1,
          Species: "Human",
          Age: '45-51',
          Name: "C. Randall Poopenmeyer",
          Profession: "Mayor of New New York City"
        },
        {
          id: 2,
          Species: "Human",
          Age: 'Unknown',
          Name: "Candy",
          Profession: "Formerly: Crew member of Planet Express"
        },
        {
          id: 3,
          Species: "Human",
          Age: '41-47',
          Name: "Hermes Conrad",
          Profession: "Currently: Bureaucrat and AccountantFormerly: Limbo champion, Robot Inspector"
        }
      ]
    }
  },
  components: {
    ListCharacter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
