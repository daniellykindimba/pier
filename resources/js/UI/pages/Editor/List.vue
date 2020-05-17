<template>
  <div id="PierEditor" class="p-10">
    <c-link as="router-link" to="/editor/add" textDecoration="none">
      <c-button variant-color="orange">
        <c-box d="inline-flex" align-items="center">
          <c-box mr="2" mb="1">
            <c-icon name="add" size="14px" />
          </c-box>
          New Pier Model
        </c-box>
      </c-button>
    </c-link>

    <c-box mt="6">
      <c-box backgroundColor="#333" borderColor="#555" 
        maxW="sm" border-width="2px" rounded="lg" overflow="hidden">
        <c-box p="5">
          <c-text mb="2" fontSize="2xl">Post Comments</c-text>
          <c-text mb="2" fontSize="xl" color="#ccc">
            5 fields
          </c-text>

          <!-- <c-button px="0" variant="ghost" color="orange.200">
            <c-box d="inline-flex" align-items="center">
              <c-box mr="2" mb="1">
                <c-icon name="add" size="14px" />
              </c-box>
              Change
            </c-box>
          </c-button> -->
        </c-box>
      </c-box>
    </c-box>
  </div>
</template>

<script>

import { CBox, CText, CButton, CIcon, CLink } from '@chakra-ui/vue';

export default {
  name: "EditorList",
  mounted() {
    console.log("Pier Editor setup");
  },
  data() {
    return {};
  },
  methods: {
    async logout() {}
  },
  components: {
    CBox, CText, CButton, CIcon, CLink
  }
};
</script>