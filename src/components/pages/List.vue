<template>
  <div class="container is-fluid">
    <table class="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th><abbr title="Heure">#</abbr></th>
          <th>Repas</th>
          <th><i class="fa fa-times"></i></th>
          <th><i class="fa fa-check"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dish, idx) in list" :key="dish.id">
          <th>{{idx+1}}</th>
          <td>{{dish.name}}</td>
          <td>
            {{dish.bad}}
          </td>
          <td>
            {{dish.good}}
          </td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
const URL_API = 'http://localhost:3000/dishes'
export default {
  name: 'list',
  data() {
    return {
      list: []
    }
  },
   async created() {
   const responseList = await this.axios.get(URL_API)
   const list = responseList.data
   this.list = list.sort((a, b) => b.bad - a.bad)
  }
}
</script>

<style scoped>

</style>



