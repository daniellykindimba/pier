<template>
  <div class="h-screen flex-1 flex flex-col">
    <header id="mainNav">
      <span id="pageTitle">
        {{ modelName }}
      </span>
    </header>
        
    <div id="mainContent">
      <ModelRecordList :model="model" />
    </div>
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
      modelName: function(modelId){
        this.setupModel();
      },
    },
    methods: {
      setupModel(){
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