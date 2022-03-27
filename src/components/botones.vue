<template>
      <div class="buttons">
          <button @click="$store.dispatch('subirCounter')">+</button>
          <button @click="$store.dispatch('bajarCounter')">-</button> 
      </div>
</template>

<script>
export default {
  name: 'botones'
}
</script>
