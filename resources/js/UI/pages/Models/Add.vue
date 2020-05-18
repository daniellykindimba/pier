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

[data-chakra-component="CInput"]::placeholder{
  color: #6a6a6a;
}

#fieldTypeOptions{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.8rem;
  /* margin-top: -2rem; */
  user-select: none;
}
.action-label{
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  border: 1px solid #555;
  border-radius: 5px;
  width: auto;
  cursor: pointer;
  color: #777;
  font-size: 0.8rem;
  text-transform: capitalize;
}
.action-label.active{
  border-color: #8c6d52;
  background: #28231f;
  color: #ffba7f;
}

.action-label svg{
  display: inline-block;
  margin-bottom: 0.2rem;
}

.action-label span:last-child{
  display: block;
  width: 100%;
}

.action-label input{
  display: none !important
}
</style>
<template>
  <c-box d="flex" padding="10" flex-direction="column" align-items="center" justify-content="center">
    <c-box width="780px" mb="6" pb="2" border-width="2px" border-color="#444" rounded="lg">
      <c-box>
        <c-box p="6">
          <c-box d="flex" align-items="center" justify-content="space-between">
            <c-text color="#ddd" mb="5" fontSize="2xl">
              New Pier Model
            </c-text>

            <c-stack isInline spacing="3">
              <c-button size="md" align-self="flex-start" variant="outline" color="#777" 
                @click="$router.replace('/models')">
                <c-icon name="close" size="11px" mr="3" /> Cancel
              </c-button>

              <c-button size="md" 
                :disabled="!name.length || !fields.length || curFieldIndex !== -1"
                px="4" variant-color="orange"
                :isLoading="savingModel"
                @click="saveModel">
                <c-box d="inline-flex" align-items="center">
                  <c-box mr="3" mb="1">
                    <c-icon name="check" size="15px" />
                  </c-box>
                  Save Model
                </c-box>
              </c-button>
            </c-stack>
          </c-box>

          <c-stack spacing="5" color="#999">
            <c-form-control>
              <c-form-label fontSize="xl" htmlFor="name">Model Name</c-form-label>
              <c-input id="name" type="text" placeholder="E.g Article" size="lg" v-model="name" />
              
              <c-form-helper-text id="email-helper-text">
                Pascal case is a more standard way to name model
              </c-form-helper-text>
            </c-form-control>
            
            <c-box d="flex" mb="0" align-items="center" justify-content="space-between">
              <c-text fontSize="xl" htmlFor="label">Fields</c-text>

              <c-button v-if="curFieldIndex === -1" 
                :disabled="curFieldIndex !== -1"
                alignSelf="center" variant="ghost" color="orange.200" @click="addField">
                <c-box d="inline-flex" align-items="center">
                  <c-box mr="2" mb="1">
                    <c-icon name="add" size="14px" />
                  </c-box>
                  Add Field
                </c-box>
              </c-button>
            </c-box>

            <template v-for="(field, index) in fields">
              <c-pseudo-box role="group" :key="index" mb="0"
                :pointerEvents="curFieldIndex !== -1 && curFieldIndex !== index ? 'none' : 'auto'">
                <div style="margin-bottom: -0.6rem">
                  <c-box rounded="md" color="#777" px="4" py="3" background="#222">
                    <c-box mb="1" d="flex" align-items="center" justify-content="space-between">
                      <c-box d="flex" align-items="center">
                        <c-box mr="3">
                          <MDIcon :icon="field.type.value ? field.type.value : 'down'" 
                            :size="20" />
                        </c-box>

                        <c-text fontSize="xl" color="#999">
                          <span v-if="!field.type.label">
                            Pick field type
                          </span>
                          <span v-else>
                            {{ field.label || 'New Field'}}
                          </span>
                        </c-text>
                        &nbsp; 
                        <c-text fontSize="md" color="#777" v-if="field.type.label">( {{ field.type.label.toLowerCase() }} )</c-text>
                      </c-box>

                      <template v-if="curFieldIndex === index">
                        <c-button size="sm" v-if="!fields[curFieldIndex].type.label" align-self="flex-start" variant="ghost" color="#777" 
                          @click="removeField(index)">
                          <c-icon name="close" size="11px" mr="3" /> Cancel
                        </c-button>

                        <c-stack v-else isInline spacing="3">
                          <c-button size="sm" variant="outline" color="#777" 
                            @click="editing ? cancelAddField() : removeField(index)">
                            Cancel
                          </c-button>

                          <c-button size="sm" :disabled="!fields[curFieldIndex].label || !fields[curFieldIndex].type.label"
                            px="4" variant-color="orange"
                            @click="cancelAddField">
                            Done
                          </c-button>
                        </c-stack>
                      </template>

                      <c-pseudo-box v-else opacity="0" pointerEvents="none" 
                        :_groupHover="{ opacity: 1, pointerEvents: 'auto'}">
                        <c-button size="sm" variant="ghost" color="#777" 
                          @click="curFieldIndex === -1 ? editField(index) : null">
                          Change
                        </c-button>

                        <c-button size="sm" variant="ghost" color="red.200" @click="removeField(index)">
                          Delete
                        </c-button>
                      </c-pseudo-box>
                    </c-box>

                    <template v-if="curFieldIndex === index">
                      <c-box my="3">
                        <c-stack spacing="6" color="#999">
                          <c-form-control v-if="fields[curFieldIndex].type.value">
                            <c-form-label color="#777" fontSize="lg" htmlFor="fieldLabel">Field Label</c-form-label>
                            <c-input id="fieldLabel" type="text" placeholder="E.g description" size="md"
                              v-model="fields[curFieldIndex].label" />
                          </c-form-control>
                          
                          <c-form-control v-if="!fields[curFieldIndex].type.value">
                            <c-box mt="2">
                              <div id="fieldTypeOptions">
                                <template v-for="(type, index) in dbFieldTypes">
                                  <label :key="index" 
                                    :for="`dbFieldtype${type.value}`" 
                                    class="action-label text-center"
                                    :class="{'active' : fields[curFieldIndex].type.value === type.value}"
                                    @click="fields[curFieldIndex].type = type; focusLabelInput()">
                                      <MDIcon :icon="type.value" :size="32" />
                                      <span>{{type.label}}</span>
                                  </label>
                                </template>
                              </div>
                            </c-box>
                          </c-form-control>
                        </c-stack>
                      </c-box>
                    </template>
                  </c-box>
                </div>
              </c-pseudo-box>
            </template>
          </c-stack>
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
  CFormControl,
  CFormLabel,
  CFormHelperText,
  CInput 
} from '@chakra-ui/vue';

import dbFieldTypes from "./DbFieldTypes";
import MDIcon from "./MDIcon";
import { mapState } from 'vuex';

export default {
  name: "ModelsAdd",
  data() {
    return {
      name: "",
      editing: false,
      dbFieldTypes,
      curFieldIndex: -1,
      fields: [
        // {
        //   label: "name",
        //   type: "long text",
        // }
      ]
    };
  },
  computed: {
    ...mapState(['savingModel'])
  },
  methods: {
    // async addField() {}
    removeField(index) {
      if(!index)
        index = this.curFieldIndex;

      this.fields.splice(index, 1);
      this.editing = false;
      this.curFieldIndex = -1;
    },
    cancelAddField() {
      // if(!this.editing && this.curFieldIndex === this.fields.length - 1)
      //   this.fields.splice(this.curFieldIndex, 1);

      this.editing = false;
      this.curFieldIndex = -1;
    },
    saveModel() {
      const data = {
        name: this.name.replace(/ /g,""),
        fields: this.fields.map(({label, type}) => ({label, type: type.value}))
      }

      this.$store.dispatch('createModel', data);
    },
    addField() {
      this.editing = false;
      this.fields.push({
        label: "",
        type: {}
      });

      this.curFieldIndex = this.fields.length - 1;
    },
    editField(index) {
      this.editing = true;
      this.curFieldIndex = index;
      this.focusLabelInput();
    },
    focusLabelInput(index) {
      this.$nextTick(() => {
        this.$el.querySelector("#fieldLabel").focus();
      })
    }
  },
  components: {
    CBox, 
    CPseudoBox, 
    CText, 
    CButton, 
    CIcon, 
    CStack, 
    CFormControl,
    CFormLabel,
    CFormHelperText,
    CInput,
    MDIcon
  }
};
</script>