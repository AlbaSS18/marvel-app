<template>
  <div>
    <DataTable :value="characters">
      <Column field="Species" header="Species"></Column>
      <Column field="Age" header="Age"></Column>
      <Column field="Name" header="Name"></Column>
      <Column field="Profession" header="Profession"></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  name: "list-characters",
  data() {
    return {
      characters: [
        {
          Species: "Human",
          Age: '45-51',
          Name: "C. Randall Poopenmeyer",
          Profession: "Mayor of New New York City"
        },
        {
          Species: "Human",
          Age: 'Unknown',
          Name: "Candy",
          Profession: "Formerly: Crew member of Planet Express"
        },
        {
          Species: "Human",
          Age: '41-47',
          Name: "Hermes Conrad",
          Profession: "Currently: Bureaucrat and AccountantFormerly: Limbo champion, Robot Inspector"
        }
      ]
    }
  }
};
</script>

<style scoped></style>