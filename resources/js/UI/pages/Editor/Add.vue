<style>
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.8rem;
}
.action-label{
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #555;
  border-radius: 5px;
  width: auto;
  cursor: pointer;
  color: #aaa;
  font-size: 1.1rem;
  text-transform: capitalize;
}
.action-label.active{
  border-color: #8c6d52;
  background: #28231f;
}
.action-label:before{
  content: "";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #555;
}
.action-label.active:before{
  display: none;
}
.action-label svg{
  display: inline-block;
  width: 22px;
  height: 22px;
  color: #ffba7f;
}
.action-label:not(.active) svg{
  display: none;
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
    <c-box width="780px" mb="6" border-width="2px" border-color="#444" rounded="lg">
      <c-box p="6">
        <c-text color="#ddd" mb="5" fontSize="2xl">New Pier Model</c-text>

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

            <c-button :opacity="curFieldIndex === -1 ? 1 : 0" 
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
            <c-box :key="index" rounded="md"
              color="#777" px="4" pt="2" pb="3" mb="1" background="#222" 
              d="flex" align-items="center" justify-content="space-between"
              :opacity="field.label || field.type.label ? 1 : 0.3" 
              :cursor="curFieldIndex === -1 ? 'pointer' : ''"
              @click="curFieldIndex === -1 ? editField(index) : null">
              <c-text fontSize="xl">
                {{ field.label }} &nbsp;
              </c-text>
              <c-text fontSize="xl">
                {{ field.type.label }}
              </c-text>
            </c-box>
          </template>
        </c-stack>

        <c-button v-if="curFieldIndex === -1" mt="6" size="lg" width="100%" variant-color="orange" 
          :isLoading="saving"
          :disabled="!name.length || !fields.length"
          @click="saveModel">
          Save Model
        </c-button>
      </c-box>
    </c-box>

    <template v-if="curFieldIndex !== -1">
      <c-box width="780px" p="6">
        <c-box mb="6" d="flex" align-items="center" justify-content="space-between">
          <c-text color="#ddd" fontSize="2xl">
            {{ !editing ? 'Add New' : 'Edit' }} Field
          </c-text>

          <c-button :disabled="!fields[curFieldIndex].label || !fields[curFieldIndex].type.label"
            px="4" variant-color="orange"
            @click="curFieldIndex = -1">
            <c-box d="inline-flex" align-items="center">
              <c-box mr="3" mb="1">
                <c-icon name="check" size="18px" />
              </c-box>
              Done
            </c-box>
          </c-button>
        </c-box>

        <c-stack spacing="6" color="#999">
          <c-form-control>
            <c-form-label fontSize="xl" htmlFor="label">Field Label</c-form-label>
            <c-input ref="fieldLabel" id="label" type="text" placeholder="E.g description" size="lg"
              v-model="fields[curFieldIndex].label" />
          </c-form-control>
          
          <c-form-control>
            <c-form-label fontSize="xl" htmlFor="type">Field Type</c-form-label>

            <c-box mt="2">
              <div id="fieldTypeOptions">
                <template v-for="(type, index) in dbFieldTypes">
                  <label :key="index" 
                    :for="`dbFieldtype${type.value}`" 
                    class="action-label text-center"
                    :class="{'bg-blue-100 active' : fields[curFieldIndex].type.value === type.value}"
                    @click="fields[curFieldIndex].type = type">
                      <!-- <input :id="`dbFieldtype${type.value}`" type="radio"
                        v-model="fields[curFieldIndex].type" 
                        :value="type.value" /> -->

                      <svg class="text-blue-800" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>

                      <span>{{type.label}}</span>
                  </label>
                </template>
              </div>
            </c-box>
          </c-form-control>

          <c-button v-if="!editing" align-self="flex-start" variant="outline" color="orange.200" @click="cancelAddField">
            <c-icon name="close" size="12px" mr="3" /> Cancel
          </c-button>
          <c-button v-else align-self="flex-start" variant="outline" color="orange.200" @click="removeField">
            <c-icon name="close" size="12px" mr="3" /> Remove Field
          </c-button>
        </c-stack>
      </c-box>
    </template>
  </c-box>
</template>

<script>

import { 
  CBox, 
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

export default {
  name: "EditorAdd",
  data() {
    return {
      name: "",
      saving: false,
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
  methods: {
    // async addField() {}
    removeField() {
      this.fields.splice(this.curFieldIndex, 1);
      this.editing = false;
      this.curFieldIndex = -1;
    },
    cancelAddField() {
      if(!this.editing && this.curFieldIndex === this.fields.length - 1)
        this.fields.splice(this.curFieldIndex, 1);

      this.editing = false;
      this.curFieldIndex = -1;
    },
    saveModel() {
      this.saving = true;
      const data = {
        fields: this.fields.map(({label, type}) => ({label, type: type.value}))
      }

      axios.post(`/editor/${this.name.replace(/ /g,"")}/`, data)  
        .then(({data}) => {
          this.saving = false;
          this.$router.replace('/editor/list');
        })
        .catch(error => {
          this.saving = false;
          console.log("Axios error: ", error)
        });
    },
    addField() {
      this.editing = false;
      this.fields.push({
        label: "",
        type: {}
      });

      this.curFieldIndex = this.fields.length - 1;

      this.$nextTick(() => {
        console.log(this.$refs.fieldLabel.$el.focus());
      })
    },
    editField(index) {
      this.editing = true;
      this.curFieldIndex = index;
      this.$nextTick(() => {
        console.log(this.$refs.fieldLabel.$el.focus());
      })
    }
  },
  components: {
    CBox, 
    CText, 
    CButton, 
    CIcon, 
    CStack, 
    CFormControl,
    CFormLabel,
    CFormHelperText,
    CInput
  }
};
</script>