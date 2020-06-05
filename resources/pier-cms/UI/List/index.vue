<style scoped>
  .pier-th.image,
  .pier-th.phone,
  .pier-th.email,
  .pier-th.video,
  .pier-th.rating,
  .pier-th.boolean,
  .pier-th.date{
    text-align: center;
  }
</style>
<template>
  <Loader :size="90" v-if="fetchingRecords || !model || !model.fields" />
  <table v-else class="pure-table pure-table-striped" 
    style="border-top: none !important; width:100%; min-width: 500px;">
    <thead>
      <tr>
        <th :class="['pier-th', field.type]" v-for="(field, index) in model.fields" 
          :key="index">
          {{ field.label.replace(/_/g, ' ') }}
        </th>
        <th style="width: 120px" class="text-center">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <TableRow v-for="record in records"
        :key="record._id"
        :fields="model.fields"
        :data="record"
      />
    </tbody>
  </table>
</template>

<script>
  import { fetchModelRecords, populateModel } from "../../API";
  import TableRow from "./TableRow";

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

        this.fetchingRecords = true;
        const res = await fetchModelRecords(this.model.name);
        this.records = res;
        this.fetchingRecords = false;

        console.log("Records: ", res);
      },
      async populate(){
        // this.populating = true;
        // const res = await populateModel(this.model.name);
        // this.records = res;
        // this.populating = false;
      },
    },
    components: {
      TableRow
    }
  }
</script>