<template>
    <div id="container">
        <aside class="flex-shrink-0">
            <div class="long-header bg-blue-100 text-blue-800 tracking-wider">
                <img class="mb-2" style="height:50px; margin-left: -8px" src="img/logo.png" alt="">
                Global Compact
            </div>
            <ul>
                <li v-for="model in models"
                    :key="model._id">
                    <router-link :to="`/${model.name}`">
                        {{ model.name }}
                    </router-link>
                </li>
            </ul>
        </aside>

        <main class="flex-1 h-screen">
            <router-view />
        </main>
    </div>
</template>

<script>
  export default {
    name: 'PierCMSWrapper',
    mounted(){
        if(this.$route.path === "/")
            this.$router.replace("/" + window.models[0].name);
    },
    data() {
      return {
        models: window.models
      };
    }
  }
</script>