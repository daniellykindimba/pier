<style>
.fieldItem:not(:hover) .fieldActionButtons{
  display: none;
}
</style>
<template>
    <c-box p="6" border-width="2px" border-color="#444" rounded="lg">
        <c-box v-if="fetchingModels || !model || !model._id" d="flex" padding="6" align-items="center" justify-content="center">
            <c-circular-progress is-indeterminate />
        </c-box>

        <c-stack spacing="3" color="#999">
            <c-box v-if="!model || !model.fields" />
            <template v-for="(field, index) in model.fields">
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
</template>

<script>

import { 
  CBox,
  CText, 
  CStack,
  CCircularProgress, CCircularProgressLabel,
} from '@chakra-ui/vue';

import PierModelField from "../components/PierModelField";
import { mapState } from 'vuex';

export default {
  name: "ModelStructure",
  props: {
    model: {
      type: Object,
      default: function(){
          return {}
      }
    }
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
    ...mapState(['models', 'fetchingModels'])
  },
  components: {
    CBox,
    CText, 
    CStack,
    CCircularProgress, CCircularProgressLabel,
    PierModelField
  }
};
</script>