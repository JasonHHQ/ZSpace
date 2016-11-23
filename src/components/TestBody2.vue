<template>
	<div>
		<h1 @click="changecolor">The color is: {{color}}</h1>
		<h1 @click="changecolors">The color is: {{colorArray[0]}}</h1>
	</div>
</template>
<script>
	export default{
		props: {
			color: String,
			colorArray: {
				type: Array,
				default: ['blue', ]
			}
		},
		methods:{
			changecolor(){
				this.color = 'yellow'
			},
			changecolors(){
				this.colorArray[0] = 'yellow'
			}
		}
	}
</script>