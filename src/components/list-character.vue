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
  props: {
    characters: Array,
  },
};
</script>

<style scoped></style>
