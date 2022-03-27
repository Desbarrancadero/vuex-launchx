<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">


    <Counter/>
    <cuadrado/>
    <botones/>
  </div>
</template>

<script>
import Counter from "../components/Contador.vue";
import cuadrado from "../components/cuadrado.vue";
import botones from "../components/botones.vue";
export default {
  name: 'HomeView',

  components:{
    Counter,
    cuadrado,
    botones,
  }
}
</script>


<style>


div{
  margin-bottom: 10px;
}


  .counter{
    font-size: 80px;
  }

  .buttons button{
    font-size: 40px;
    width: 100 px;
    margin: 0px 10px;

  }

  .cuadrado{
    font-size: 25px;
  }
</style>