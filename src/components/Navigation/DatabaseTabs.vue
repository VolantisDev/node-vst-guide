<template>
  <q-tabs>
    <q-route-tab to="/database/instruments" default slot="title" icon="music note" label="Instruments"></q-route-tab>
    <q-route-tab to="/database/effects" slot="title" icon="graphic eq" label="Effects"></q-route-tab>
    <q-route-tab to="/database/presets" slot="title" icon="radio" label="Presets"></q-route-tab>
    <q-route-tab to="/database/samples" slot="title" icon="album" label="Samples"></q-route-tab>
  </q-tabs>
</template>

<script>
  import {
    QTabs,
    QRouteTab
  } from 'quasar'

  export default {
    name: 'DatabaseTabs',
    components: {
      QTabs,
      QRouteTab
    }
  }
</script>
