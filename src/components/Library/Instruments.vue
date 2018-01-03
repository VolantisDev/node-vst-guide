<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div>
    <!-- Add listing here -->

    <q-data-table :data="tableData" :config="tableConfig" :columns="tableColumns" @refresh="refresh">

    </q-data-table>

    <q-fab
      color="primary"
      class="fixed"
      style="right: 18px; bottom: 18px"
      icon="keyboard arrow up"
      direction="up"
    >
      <q-fab-action color="primary" @click="scan" icon="refresh"></q-fab-action>
    </q-fab>
  </div>
</template>

<script>
  import {
    QFab,
    QFabAction,
    QDataTable
  } from 'quasar'
  import vstGuideLibrary from 'vst-guide-library'

  export default {
    name: 'Index',
    components: {
      QFab,
      QFabAction,
      QDataTable
    },
    data () {
      return {
        tableConfig: {
          rowHeight: '50px',
          title: 'Instruments',
          refresh: true,
          columnPicker: true,
          responsive: true,
          messages: {
            noData: '<i>warning</i> No instruments found in your library.',
            noDataAfterFiltering: '<i>warning</i> No instruments found matching your filter.'
          }
        },
        tableColumns: [
          {
            label: 'Name',
            field: 'name',
            width: '200px',
            filter: true,
            sort: true,
            type: 'string'
          }
        ],
        tableData: []
      }
    },
    methods: {
      scan: function (event) {
        // @todo Scan for updates to instruments
      },
      loadTableData: function () {
        vstGuideLibrary.collections.instrumentCollection.all()
          .then(function (instruments) {
            this.tableData = instruments.items
          })
      },
      mounted: function () {
        this.loadTableData()
      }
    }
  }
</script>

<style>
</style>
