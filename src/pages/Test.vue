<template>
  <div id="test">

    <div class="test-header">
	    <div class="logo">
		    <img src="../assets/logo.png" width=30 height=30>
		    <h3>Test page</h3>
	    </div>
			<div class="test-list"

				:style="{width:TestListWidth + 'px'}"
				@wheel.prevent="wheel($event)">
				<ul :style="{width:TestListWidth + 'px'}">
					<li v-for="(page,index) in testPage"
							@click="TestListClick(index)"
							:class="{active:isactive[index]}">
						<a >Test {{page}}</a>
					</li>
				</ul>
			</div>
    </div>
    <div class="test-body" >
			<transition name="component-fade" mode="out-in">
				<keep-alive>
				  <component v-bind:is="currentTestPage">
						<!-- 非活动组件将被缓存！ -->
					</component>
	    	</keep-alive>
			</transition>
		</div>
  </div>
</template>

<script>
import Test1 from '../components/Test1'
import Test2 from '../components/Test2'
import Test3 from '../components/Test3'
import Test4 from '../components/Test4'
import Test5 from '../components/Test5'
import Test6 from '../components/Test6'
import Test7 from '../components/Test7'

export default{
	name: 'test',
	data(){
		return {
			testPage: 7,
			isactive: [true, ],
			currentTestPage: Test1
		}
	},
	computed:{
		TestListWidth(){
			return 100*this.testPage
		}
	},
	components: {
		// basic example 
		// v-for , v-if , v-on, v-bind
		Test1, 

		// this is a wrong example for Props
    // http://cn.vuejs.org/v2/guide/components.html#单向数据流
		Test2, 

		// example for Key Modifiers
    // http://cn.vuejs.org/v2/guide/events.html#按键修饰符
		Test3, 

		// example for form input binding
		Test4, 

  	// example for Form Input Components using Custom Events
  	// http://cn.vuejs.org/v2/guide/components.html#使用自定义事件的表单输入组件
		Test5,

		Test6,

		Test7
	},
	methods:{
		TestListClick(index){
			this.isactive = [false, ]
			this.isactive[index] = true
			this.currentTestPage = 'Test' + (index+1)
		},
		wheel(e){
			var list = document.getElementsByClassName('test-list')[0]
			var delta = (e.wheelDelta / 120) | (-e.detail / 3)
			list.scrollLeft -= delta*50
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
  left: 20%;
  right: 20%;
  max-width: 60%;
  min-width: 100px;
  margin: 0 auto;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  overflow: auto;
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


/*name 为 component-fade 的组件进出过渡动画*/
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease-out, transform .5s ease-out;
}
.component-fade-enter, .component-fade-leave-active {
  opacity: 0;
  transform: translateX(-100px);
}
</style>