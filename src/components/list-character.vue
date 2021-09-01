<template>
  <div>
    <DataTable :value="characters">
      <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  name: "list-characters",
  data(){
      return {
        columns: [
          {field: 'Species', header: 'Species'},
          {field: 'Age', header: 'Age'},
          {field: 'Name', header: 'Name'},
          {field: 'Profession', header: 'Profession'},
        ]
      }
  },
  props: {
    characters: Array,
  },
};
</script>

<style scoped></style>
