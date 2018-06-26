<template>
  <div>
    <header>
        <span>What's good for you <i class="fa fa-heart red" style="-webkit-text-fill-color: black"></i></span>
      </header>
      <div class="tabs is-centered">
        <ul>
          <li :class="isActive('Home') ? 'is-active' : ''">
            <a v-on:click="goTo('Home')">Accueil</a>
          </li>
          <li :class="isActive('List') ? 'is-active' : ''">
            <a v-on:click="goTo('List')">Liste</a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  created() {
    console.log('Hel created')
  },
  methods: {
    isActive(routeName) {
      return this.$route.name === routeName
    },
    goTo(routeName) {
      this.$router.push(routeName)
    }
  }
}
</script>

<style scoped>

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

</style>


