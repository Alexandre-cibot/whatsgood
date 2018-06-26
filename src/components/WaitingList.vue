<template>
  <table class="table">
  <thead>
    <tr>
      <th><abbr title="Heure">Heure</abbr></th>
      <th>Repas</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="dish in list">
      <th>12h15</th>
      <td>{{dish.name}}</td>
      <td>
        <button class="button is-danger is-outlined" disabled>
          <i class="fa fa-times"></i>
        </button>
      </td>
      <td>
        <button class="button is-success is-outlined" disabled>
          <i class="fa fa-check"></i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
const URL_API = 'http://localhost:3000/dishes'
export default {
  name: 'waitingList',
  data() {
    return {
      list: []
    }
  },
  async created() {
   const responseList = await this.axios.get(URL_API)
   const list = responseList.data
   this.list = list
  }

}
</script>

<style scoped>
.table {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>

