
<template>
  <div id="list-complete-demo" class="demo">
    <button v-on:click="doshuffle">Shuffle</button>
    <button v-on:click="doadd">Add</button>
    <button v-on:click="doremove">Remove</button>
    <transition-group name="list-complete" tag="p">
      <span
        v-for="item in items"
        v-bind:key="item"
        class="list-complete-item"
      >
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
      }
    },
    methods: {
      randomIndex (array) {
        return Math.floor(Math.random() * array.length)
      },
      shuffle(array){
        var newarray = []
        while( array.length>0 ){
          var randomNumber = this.randomIndex(array)
          newarray.push(array.splice(randomNumber, 1)[0])
        }
        return newarray
      },
      doadd () {
        this.items.splice(this.randomIndex(this.items), 0, this.nextNum++)
      },
      doremove () {
        this.items.splice(this.randomIndex(this.items), 1)
      },
      doshuffle () {
        this.items = this.shuffle(this.items)
      }
    }
  }
</script>

<style>
  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }


</style>