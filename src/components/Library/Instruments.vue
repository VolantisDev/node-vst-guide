<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div>
    <!-- Add listing here -->

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
    QFabAction
  } from 'quasar'

  export default {
    name: 'Index',
    components: {
      QFab,
      QFabAction
    },
    methods: {
      scan: function (event) {
        // @todo Scan plugins, Kontakt, and Reaktor
      }
    }
  }
</script>

<style>
</style>
