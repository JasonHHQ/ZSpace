<template>
  <div id="test">

    <div class="test-header">
	    <div class="logo">
		    <img src="../assets/logo.png" width=30 height=30>
		    <h3>Test page</h3>
	    </div>
			<div class="test-list" :style="{width:TestListWidth + 'px'}">
				<ul>
					<li v-for="(page,index) in testPage" 
							@click="TestListClick(index)" 
							:class="{active:isactive[index]}">
						<a >Test {{page}}</a>
					</li>
				</ul>
			</div>
    </div>
    <div class="test-body">
    	<ul>
    		<li :class="{active:isactive[0]}">
    			<!-- basic example -->
    			<!-- v-for , v-if , v-on, v-bind -->
    			<test-body1></test-body1>
  			</li>
    		<li :class="{active:isactive[1]}">
    			<!-- this is a wrong example for Props-->
    			<!-- http://cn.vuejs.org/v2/guide/components.html#单向数据流 -->
    			<test-body2 :color="color" :color-array="colorArray" :style="{color:colorArray[0]}"></test-body2>
  			</li>
    		<li :class="{active:isactive[2]}">
    			<!-- example for Key Modifiers -->
    			<!-- http://cn.vuejs.org/v2/guide/events.html#按键修饰符 -->
    			<test-body3></test-body3>
  			</li>
    		<li :class="{active:isactive[3]}">
    			<!-- example for form input binding -->
    			<test-body4></test-body4>
  			</li>
  			<li :class="{active:isactive[4]}">
  				<!-- example for Form Input Components using Custom Events -->
  				<!-- http://cn.vuejs.org/v2/guide/components.html#使用自定义事件的表单输入组件 -->
    			<test-body5></test-body5>
  			</li>
    	</ul>
		</div>
  </div>
</template>

<script>
import TestBody1 from '../components/TestBody1'
import TestBody2 from '../components/TestBody2'
import TestBody3 from '../components/TestBody3'
import TestBody4 from '../components/TestBody4'
import TestBody5 from '../components/TestBody5'

export default{
	name: 'test',
	data(){
		return {
			testPage: 5,
			isactive: [true, ],
			work: 'walking',
			color: 'red',
			colorArray: ['blue', 'green']
		}
	},
	computed:{
		TestListWidth(){
			return 100*this.testPage
		}
	},
	components: {
		TestBody1, TestBody2, TestBody3, TestBody4, TestBody5
	},
	methods:{
		TestListClick(index){
			this.isactive = [false, ]
			this.isactive[index]=true
		}
	}
}

</script>

<style>
* {
	margin: 0;
	padding: 0;
}
#test {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test-header {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	text-align: left;

	border-bottom: 1px solid #ccc;
	height: 49px;
	line-height: 50px;

  -webkit-user-select: none;
  user-select: none;
}
.test-header img {
	float: left;
	margin: 10px;
}
.test-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
}
.test-list>ul>li {
	float: left;
	width: 100px;
	list-style: none;
}
.test-list>ul>li.active,
.test-list>ul>li:hover {
	background: #42b884;
	color: #fff;
}
.test-list>ul>li:hover {
	opacity: 0.4;
}
.test-list>ul>li>a {
	text-decoration: none;
	color: inherit;
}
.test-body{
  text-align: left;
  width: 60%;
  margin-left: 20%;
	padding: 20px;
}
.test-body>ul>li{
	display: none;
	list-style: none;
}
.test-body>ul>li.active{
	display: block;
}
</style>