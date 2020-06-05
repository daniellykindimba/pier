<template>
  <div class="h-screen flex-1 flex flex-col relative">
    <header id="mainNav">
      <span id="pageTitle" class="mr-3">
        {{ modelName }}
      </span>

      <router-link :to="`/${modelName}/add`" class="rounded-btn border mt-0 ml-3">
          Add New {{ modelName }}
      </router-link>

      <span class="flex-1"></span>
    </header>
        
    <div id="mainContent">
      <ModelRecordList :model="model" />
    </div>

    <router-view />
  </div>
</template>

<script>
  import ModelRecordList from './List';

  export default {
    name: 'PierCMS',
    props: {
      modelName: {
        type: String,
        required: true
      }
    },
    mounted(){
      this.setupModel();
    },
    data() {
      return {
        model: {}
      };
    },
    watch: {
      modelName: function(){
        this.setupModel();
      },
    },
    methods: {
      setupModel(){
        if(!this.modelName)
          return;

        this.$store.dispatch('setSelectedModel', this.modelName);
        let model = window.models.find(({name}) => name === this.modelName);
        if(model){
          model.fields = JSON.parse(model.fields);
          this.model = model;
        }
      },
    },
    components: {
      ModelRecordList
    }
  }
</script>