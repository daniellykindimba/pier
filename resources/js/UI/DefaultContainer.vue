<template>
  <div id="PierApp" class="h-screen bg-dark-200 flex text-white">
    <aside v-if="modelBeingEdited && modelBeingEdited._id" 
      class="h-full w-64 bg-dark-300 p-5">
      <c-text fontSize="3xl" color="orange.200">
        Pier
      </c-text>
      <c-box mb="6" />

      <template v-if="models && models.length">
        <c-link v-for="(model, index) in models" 
          :key="index"
          as="router-link" 
          :to="`/models/${model._id}/details`"
        >
          <c-box px="1" py="4" 
            :color="model._id === modelBeingEdited._id ? 'orange.300' : ''">
            {{ model.name }}
          </c-box>
        </c-link>
      </template>
    </aside>
    
    <main class="h-full flex-1 flex flex-col">
      <header v-if="!modelBeingEdited || !modelBeingEdited._id" class="h-16 flex items-center px-6 py-3">
        <c-text padding="6" fontSize="2xl">
          Pier
        </c-text>
      </header>

      <div class="flex-1 bg-dark-400 overflow-auto">
        <c-dark-mode>
          <router-view />
        </c-dark-mode>
      </div>
    </main>
  </div>
</template>

<script>

import { CText, CLink, CButton, CDarkMode, CBox } from '@chakra-ui/vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: "DefaultContainer",
  data() {
    return {};
  },
  computed: {
    ...mapState(['models']),
    ...mapGetters(['modelBeingEdited']),
    name() {
      return this.$route.name;
    },
    list() {
      let routeNames = this.$route.matched.filter(
        route => route.name || route.meta.label
      ).map(({name}) => name);
      routeNames.shift();

      return routeNames.join(" > ");
    }
  },
  methods: {
    async logout() {}
  },
  components: {
    CText,
    CLink,
    CButton, CDarkMode, CBox
  }
};
</script>