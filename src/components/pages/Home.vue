<template>
  <div>
    <section class="section has-background-light">
      <NewDishForm />
    </section>
    <section class="section">
      <h2 class=" title is-5 has-text-left has-text-grey-dark">
       Liste en attente
      </h2>
      <p class="subtitle is-6">Attends quelque heure, et coche la case</p>
      <div class="container">
        <WaitingList />
      </div>
    </section>
  </div>
</template>

<script>
import NewDishForm from '@/components/NewDishForm'
import WaitingList from '@/components/WaitingList'

export default {
  name: 'home',
  components: {
    NewDishForm,
    WaitingList
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
