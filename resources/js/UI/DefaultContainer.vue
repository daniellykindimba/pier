<template>
  <div id="PierApp" class="h-screen bg-dark-200 flex text-white">
    <!-- <aside class="h-full w-64 bg-dark-300 p-5">
      Some aside stuff here
    </aside> -->
    
    <main class="h-full flex-1 flex flex-col">
      <header class="h-16 flex items-center px-6 py-3">
        <c-text padding="6" fontSize="2xl">
          Pier
        </c-text>
      </header>

      <div class="flex-1 bg-dark-400 overflow-auto">
        <!-- <c-box px="6">
          <c-text color="#888" px="6" py="3" fontSize="18px">
            {{ list }}
          </c-text>
        </c-box> -->

        <c-dark-mode>
          <router-view />
        </c-dark-mode>
      </div>
    </main>
  </div>
</template>

<script>

import { CText, CButton, CDarkMode, CBox } from '@chakra-ui/vue';
export default {
  name: "DefaultContainer",
  data() {
    return {};
  },
  computed: {
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
    CText, CButton, CDarkMode, CBox
  }
};
</script>