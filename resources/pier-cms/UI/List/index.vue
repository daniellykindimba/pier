<template>
  <table class="table table-stripped" 
    style="border-top: none !important"
    v-if="model && model.fields">
    <thead>
      <tr>
        <th v-for="(field, index) in model.fields" 
          :key="index">
          {{ field.label.replace(/_/g, ' ') }}
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr class="text-capitalize" v-for="(entry, index) in auditTrail" :key="index">
        <td class="pl-4 text-center pt-4">
          <span style="display: inline-block; width: 30px; height: 30px; overflow: hidden; border-radius: 50%" v-html="getIcon(entry.browser)" />
        </td>
        <td>
          <span class="d-block mb-1" style="font-size: 1.3em; line-height: 1.35em">{{ entry.action }}</span>
          <span style="font-size: 1.3em; color: rgb(65, 145, 177)">{{ entry.time }}</span>
        </td>
        <td class="text-center pt-4" style="">{{ entry.operatingSystem }}</td>
      </tr> -->
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'PierCMSList',
    props: {
      model: {
        type: Object,
        default: function(){
          return {}
        }
      }
    },
    mounted(){
      this.fetchRecords();
    },
    data() {
      return {
        records: [],
        populating: false,
        fetchingRecords: false,
      };
    },
    watch: {
      model: function(){
        this.fetchRecords();
      },
    },
    methods: {
      async fetchRecords(){
        if(!this.model || !this.model._id)
          return console.log("No model found!");

        // this.fetchingRecords = true;
        // const res = await browseModel(this.model.name);
        // this.records = res;
        // this.fetchingRecords = false;
      },
      async populate(){
        // this.populating = true;
        // const res = await populateModel(this.model.name);
        // this.records = res;
        // this.populating = false;
      },
    },
  }
</script>