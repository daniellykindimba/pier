<template>
  <div id="PierEditor" class="p-10">
    <c-link v-if="models && models.length" as="router-link" to="/models/add" textDecoration="none">
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
      <c-box v-if="fetchingModels" d="flex" padding="6" align-items="center" justify-content="center">
        <c-circular-progress is-indeterminate />
      </c-box>
      
      <c-box v-else-if="!models || !models.length" d="flex" padding="6" align-items="center" justify-content="center">
        <c-text v-if="!models" fontSize="3xl" color="#444">
          Failed to fetch models, check your internet connection.
        </c-text>

        <c-box v-else  d="flex" flex-direction="column" align-items="center" justify-content="center">
          <c-link as="router-link" to="/models/add" mb="5">
            <c-button variant-color="orange">
              <c-box d="inline-flex" align-items="center">
                <c-box mr="2" mb="1">
                  <c-icon name="add" size="14px" />
                </c-box>
                New Pier Model
              </c-box>
            </c-button>
          </c-link>
          <c-text fontSize="3xl" color="#444">
            Click the button above to add your first pier model.
          </c-text>
        </c-box>
      </c-box>

      <template v-else>
        <c-stack direction="row" flexWrap="wrap" spacing="5">
          <c-box v-for="(model, index) in models" 
            :key="index"
            backgroundColor="#333" borderColor="#555" 
            minW="250px" mb="5" border-width="2px" rounded="lg" overflow="hidden"
            @click="$router.push(`/models/${model._id}/details`)">
            <c-box p="5">
              <c-text mb="2" fontSize="2xl">
                {{ model.name }}
              </c-text>
              <c-text mb="2" fontSize="xl" color="#ccc">
                {{ JSON.parse(model.fields).length }} fields
              </c-text>
            </c-box>
          </c-box>
        </c-stack>
      </template>
    </c-box>
  </div>
</template>

<script>

import { CBox, CText, CButton, CIcon, CLink, CStack, 
  CCircularProgress, CCircularProgressLabel 
} from '@chakra-ui/vue';
import { mapState } from 'vuex';

export default {
  name: "ModelsList",
  mounted() {
    if(!this.models)
        this.fetchModels();
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['models', 'fetchingModels'])
  },
  methods: {
    fetchModels(page = 1){
      this.$store.dispatch('getModels', page);
    },
    deleteModel(modelId) {
      this.$store.dispatch('removeModel', modelId);
    },
  },
  components: {
    CBox, CText, CButton, CIcon, CLink, CStack, 
    CCircularProgress, CCircularProgressLabel
  }
};
</script>