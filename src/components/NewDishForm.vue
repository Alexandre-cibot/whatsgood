<template>
  <div class="field has-addons sourceselection">
      <p class="control is-expanded">
        <input class="input form-control" v-model="source" list="newssources-list" v-on:input="sourceChanged" 
                 name="source-selection" id="source-selection"
                 placeholder="Ajoute un repas" />
          <datalist id="newssources-list">
            <option v-for="source in sources" :value="source.name" :label="source.name"></option>
          </datalist>
      </p>
      <p class="control">
        <a class="button is-info">
          Valider
        </a>
      </p>
    </div>
</template>

<script>
export default {
  name: 'sourceselection',
  data () {
    return {
      sources: [],
      source: '',
      deepSource: ''
    }
  },
  methods: {
    sourceChanged: function(e) {
      var newSource = e.target.value;
     // only action if value is different from current deepSource 
     if (newSource!= this.deepSource.name) { 
       for (var i=0; i<this.sources.length; i++) {
         if (this.sources[i].name == newSource) {
           this.deepSource = this.sources[i];
           this.source = this.deepSource.name;
         }
       }
       this.$emit('sourceChanged', this.deepSource.id);
     }
    }
  },
  created: function () {
    // var api = "https://newsapi.org/v1/sources?language=en";
    // this.axios.get(api).then((response) => {
    //     this.sources = response.data.sources;
    // });
    this.sources = [{name:"pizza"}, {name: "salade verte"}]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>