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
    <tr>
      <th>12h15</th>
      <td>Fromage de chevre</td>
      <td>
        <button class="button is-success is-outlined" disabled>
          <i class="fa fa-check"></i>
        </button>
      </td>
      <td>
        <button class="button is-danger is-outlined" disabled>
          <i class="fa fa-times"></i>
        </button>
      </td>
    </tr>
    <tr>
      <th>20h30</th>
      <td>Cordon bleu</td>
      <td>
        <button class="button is-success is-outlined" disabled>
          <i class="fa fa-check"></i>
        </button>
      </td>
      <td>
        <button class="button is-danger is-outlined" disabled>
          <i class="fa fa-times"></i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.table {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>

