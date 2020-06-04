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
            <c-box :key="index">
              <PierModelField
                :icon="field.type"
                :label="field.label"
                :type="field.typeLabel"
              />
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

        <c-box d="flex" v-if="fetchingModels || populating || fetchingRecords" padding="6" align-items="center" justify-content="center">
          <c-circular-progress is-indeterminate />
        </c-box>
        
        <c-box v-else-if="!records.length" 
          padding="6" d="flex" flex-direction="column" 
          align-items="center" justify-content="center">
          
          No records found.

          <c-button @click="populate">
            Populate
          </c-button>
        </c-box>
        
        <c-box d="flex" v-else padding="6" align-items="center" justify-content="center">
          {{ records.length }} entries.
        </c-box>
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
import MDIcon from "./components/MDIcon";
import PierModelField from "./components/PierModelField";
import { mapState } from 'vuex';
import { populateModel, browseModel } from '../../../services/API';

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
      fields: [],
      records: [],
      populating: false,
      fetchingRecords: false,
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
      this.fields = model.fields.map(field => {
        field.typeLabel = typeMap[field.type];
        return field;
      });

      this.fetchRecords();
    }
  },
  methods: {
    async fetchRecords(){
      this.fetchingRecords = true;
      const res = await browseModel(this.name);
      this.records = res;
      this.fetchingRecords = false;
    },
    async populate(){
      this.populating = true;
      const res = await populateModel(this.name);
      this.records = res;
      this.populating = false;
    },
  },
  components: {
    CBox,
    CText, 
    CButton, 
    CIcon, 
    CStack,
    CCircularProgress, CCircularProgressLabel,
    MDIcon,
    PierModelField
  }
};
</script>