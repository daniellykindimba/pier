<template>
  <div class="h-screen flex-1 flex flex-col">
    <header id="mainNav">
      <span id="pageTitle">
        {{ modelName }}
      </span>
    </header>
        
    <div id="mainContent">
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PierCMSDetail',
    props: {
      modelName: {
        type: String,
        required: true
      }
    },
    mounted(){
      console.log("Model name: ", this.modelName);
    },
  }
</script>