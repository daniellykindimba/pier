<style>
.fieldItem:not(:hover) .fieldActionButtons{
  display: none;
}

[data-chakra-component="CInput"]{
  color: #999;
  outline-color: #555;
}

[data-chakra-component="CInput"]:focus{
  border-color: #555;
  box-shadow: 0 0 0 1px #555;
}
</style>
<template>
  <c-box d="flex" padding="10" justify-content="center">
    <c-box width="500px" mr="6" pb="2" border-width="2px" border-color="#444" rounded="lg">
      <c-box v-if="fetchingModels" d="flex" padding="6" align-items="center" justify-content="center">
        <c-circular-progress is-indeterminate />
      </c-box>

      <c-box v-else p="6">
        <c-text color="#ddd" mb="1" fontSize="3xl">
          {{ name }}
        </c-text>

        <c-stack spacing="3" color="#999">
          <c-box />
          <template v-for="(field, index) in fields">
            <c-box :key="index" rounded="md" color="#777" px="4" py="3" background="#222">
              <c-box mb="1" d="flex" align-items="center" justify-content="space-between">
                <c-box d="flex" align-items="center">
                  <c-box mr="3">
                    <MDIcon :icon="field.type" :size="20" />
                  </c-box>

                  <c-text fontSize="xl" color="#999">
                    {{ field.label }}
                  </c-text>
                </c-box>
                <c-text fontSize="lg" color="#777">
                  {{ field.typeLabel }}
                </c-text>
              </c-box>
            </c-box>
          </template>
        </c-stack>
      </c-box>
    </c-box>

    <c-box flex="1" mb="6" pb="2" border-width="2px" border-color="#444" rounded="lg">
      <c-box p="6">
        <c-text color="#ddd" mb="1" fontSize="3xl">
          Records
        </c-text>

        <c-button @click="populate" v-if="!fetchingModels">
          Populate
        </c-button>

        <!-- <c-box d="flex" padding="6" align-items="center" justify-content="center">
          <c-circular-progress is-indeterminate />
        </c-box> -->
      </c-box>
    </c-box>
  </c-box>
</template>

<script>

import { 
  CBox,
  CPseudoBox,
  CText, 
  CButton, 
  CIcon, 
  CStack,
  CCircularProgress, CCircularProgressLabel,
} from '@chakra-ui/vue';

import dbFieldTypes from "./DbFieldTypes";
import MDIcon from "./MDIcon";
import { mapState } from 'vuex';

export default {
  name: "ModelDetail",
  props: {
    modelId: {
      type: String,
      required: true
    }
  },
  mounted(){
    if(!this.models && !this.fetchingModels){
      this.$store.dispatch('getModels');
      this.$store.subscribe(mutation => {
        if(mutation.type === 'SET_MODELS')
          this.$store.dispatch('setModelBeingEdited', this.modelId);
      });
    }
    else
      this.$store.dispatch('setModelBeingEdited', this.modelId);
  },
  beforeDestroy(){
    this.$store.dispatch('setModelBeingEdited', null);
  },
  data() {
    return {
      name: "",
      fields: []
    };
  },
  computed: {
    ...mapState(['models', 'fetchingModels', 'modelBeingEdited'])
  },
  watch: {
    modelBeingEdited: function(model){
      if(!model)
        return;

      let typeMap = {}; 
      dbFieldTypes.forEach(({label, value}) => {
        typeMap[value] = label;
      });

      this.name = model.name;
      this.fields = JSON.parse(model.fields).map(field => {
        field.typeLabel = typeMap[field.type];
        return field;
      });
    }
  },
  methods: {
    populate(){
      axios.get(`model/${this.name}/populate`)
        .then(({data}) => console.log("Populate res: ", data))
        .catch(error => console.log("Populate error: ", error));
    },
  },
  components: {
    CBox,
    CText, 
    CButton, 
    CIcon, 
    CStack,
    CCircularProgress, CCircularProgressLabel,
    MDIcon
  }
};
</script>