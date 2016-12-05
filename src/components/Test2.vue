<template>
	<child-body :color="color" :color-array="colorArray" :style="{color:colorArray[0]}">
	</child-body>
</template>
<script>
	var childBody = {
		template: `
			<div>
				<h2 @click="changecolor">The color is: {{color}}</h2>
				<h2 @click="changecolors">The color is: {{colorArray[0]}}</h2>
			</div>
		`,
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
	export default{
		data(){
			return {
				color: 'red',
				colorArray: ['blue', 'green']
			}
		},
		components: { 
			childBody
		}
	}
</script>