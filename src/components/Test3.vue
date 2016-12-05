<template>
	<div>
		<ul>
			<li v-for="n in even(this.numbers)">{{ n }}</li>
		</ul>
		<input type="text" @keyup.enter="addnewnumber" v-model="value">
	</div>
</template>
<script>
	export default{
		data(){ 
			return {
				value:'',
			  numbers: [ 1, 2, 3, 4, 5 ]
			}
		},
		methods:{
			even: function () {
		    return this.numbers.filter(function (number) {
		      return number % 2 === 0
		    })
		  },
			addnewnumber(){
				this.numbers.push(this.value)
				this.value=''
			}
		}
	}
</script>
<style>
	
</style>