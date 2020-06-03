<template>
    <PierBooleanField v-if="option.type === Boolean" 
        :option="option"
        v-model="val" />
    <PierChoicesField v-else-if="option.type == 'choice'" 
        :option="option"
        v-model="val" />
    <PierTextField v-else 
        :option="option"
        v-model="val" />
</template>

<script>

import PierBooleanField from './PierBooleanField';
import PierTextField from './PierTextField';
import PierChoicesField from './PierChoicesField';

export default {
  name: "PierModelFieldOption",
    props: {
        option: Object,
        value: Object | String | Boolean
    },
    mounted() {
        if(this.option){
            const {defaultValue} = this.option;  
            if(defaultValue !== undefined)
                this.val = defaultValue;
        }
    },
    data() {
        return {
            val: ""
        }
    },
    watch: {
        val: function(newValue){
            this.$emit('input', newValue);
        }
    },
    components: {
        PierTextField,
        PierBooleanField,
        PierChoicesField
    }
}
</script>