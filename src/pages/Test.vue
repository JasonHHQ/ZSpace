<template>
  <div id="test">
    <div class="test-header">
	    <div class="logo">
		    <img src="../assets/logo.png" width=30 height=30>
		    <h3>Test page</h3>
	    </div>
		<div class="test-list">
			<ul>
				<li v-for="(page,index) in testPage">
					<a @click="">Test {{page}}</a>
				</li>
			</ul>
		</div>
    </div>
    <div class="test-body">
			<test-body1></test-body1>
			<test-body2 :todo="work"></test-body2>
		</div>
  </div>
</template>

<script>
import TestBody1 from '../components/TestBody1'
import TestBody2 from '../components/TestBody2'

export default{
	name: 'test',
	data(){
		return {
			testPage: 2,
			work: 'walking'
		}
	},
	components: {
		TestBody1, TestBody2
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
  width: 200px;
  margin: 0 auto;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
}
.test-list li {
	float: left;
	width: 100px;
	list-style: none;
}
.test-list li.active, {
	background: #42b884;
	color: #fff;
}
.test-list li:hover {
	background: #516274;
	color: #fff;
}
.test-list li a {
	text-decoration: none;
	color: inherit;
}
</style>