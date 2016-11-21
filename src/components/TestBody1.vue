<template >
	<ul><li	v-for="(item,index) in items">
	  <a v-on:click="changecolor(index)">
		  <h1 v-if="!item.ishide">
		  	{{index+1}}. 
		  	<span v-bind:style="{color: item.color}">
		  		Hello
		  	</span> 
		  	world!
		  </h1>
	  </a>
  </li></ul>
</template>

<script>

export default{
	data(){
		return {
			items:[{
				color: 'blue',
				ishide: false
			},{
				color: 'red',
				ishide: true
			},{
				color: 'yellow',
				ishide: false
			}]
			
		} 
	},
	methods:{
		randomColor(){
			var c=[],n=0;
			while (n++ < 3){
				c.push(parseInt(Math.random()*255));
			}
			return 'rgb('+ c.join() +')';
		},
		changecolor(index){
			const color = this.randomColor();
			this.items[index].color = color;
		}
	}
}


</script>

<style>
h1{
	line-height: 80px;
}
a {
	-webkit-user-select: none;
  user-select: none;
}
</style>