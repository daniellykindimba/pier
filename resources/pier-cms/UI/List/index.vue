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
      <tr>
        <td v-if="!records.length" :colspan="model.fields.length + 1"
          class="text-center">

          <Loader v-if="populatingRecords" :size="90" />

          <div class="py-3" v-else>
            <p class="block mb-2">
              This model doesn't contain any records yet.
            </p>
            <button class="mb-2 rounded-btn border border-blue-800 text-blue-800 mt-0 ml-3"
              @click="populateRecords">
              Populate sample data
            </button>
          </div>
        </td>
      </tr>

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
        
      };
    },
    computed: {
      ...mapState(['records', 'fetchingRecords', 'populatingRecords'])
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
      async populateRecords(){
        this.$store.dispatch('populateRecords');
      },
    },
    components: {
      TableRow
    }
  }
</script>