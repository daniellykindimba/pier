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
  import { mapState } from 'vuex';

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
        populating: false,
      };
    },
    computed: {
      ...mapState(['records', 'fetchingRecords'])
    },
    watch: {
      model: function(){
        this.fetchRecords();
      },
    },
    methods: {
      async fetchRecords(){
        this.$store.dispatch('fetchRecords');
      },
      async populate(){
        // this.$store.dispatch('populateRecords');
      },
    },
    components: {
      TableRow
    }
  }
</script>