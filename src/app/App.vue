<!-- @App -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
// 🌀🌀💻 ☰☰☰☰ imports ☰☰☰☰ 💻🌀🌀
<script setup lang="ts">
import { useAppComposables } from "@/app/App.composables"
// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀
/*:----  ©MEMBER-PROPERTIES --*/
const {
	addOne,
	counter,
	name,
	doubleCount,
	add,
	reset,
	newState,
	subScribeToMutationState
} = useAppComposables()

/* #™☰☰☰☰☰☰☰ FUNCTION ☰☰☰☰☰☰ */
// runs when state mutates
subScribeToMutationState()
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
  <div class="AppContainer">
	  <h1 class="name">Pinia Vue State MGR {{ name }}</h1>
	  
	  <h1>Count</h1>
	  <h3>{{ counter }}</h3>
	  
	  <h1>Double Count</h1>
	  <h3>{{ doubleCount }}</h3>
	  
	  <button class="btn1" @click="addOne">Add One</button>
	  <button class="btn2" @click="add(17)">Add Seventeen</button>
	  <button class="btn3" @click="reset">Reset State</button>
	  <button class="btn4" @click="newState">Brand New State</button>
  </div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<style lang="scss">
.AppContainer {
	background-color: #2f323a;
	margin-top: 100px;
	padding: 0;
	width: 60%;
	margin-left: 300px;
	border-radius: 15px;
	// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
	h1 {
		font-family: Iceland, sans-serif;
		color: mediumpurple;
		font-size: 3.2rem;
		display: grid;
		place-items: center;
		margin: 0;
		padding: 5px;
	}
	
	.name {
		@extend h1;
		font-size: 2.2rem;
	}
	
	h3 {
		font-family: Iceland, sans-serif;
		color: mediumpurple;
		font-size: 4.2rem;
		display: grid;
		place-items: center;
		margin: 0;
	}
	
	.btn1 {
		font-size: 1.3rem;
		padding: 20px 70px;
		color: aliceblue;
		background-color: #2f323a;
		border-radius: 8px;
		margin-left: 14rem;
		margin-bottom: 3rem;
		cursor: pointer;
		
		&:hover {
			background-color: darkorange;
			transition: all 0.25s ease-in-out;
		}
		
		&:active {
			opacity: 0.15
		}
	}
	
	.btn2 {
		@extend .btn1;
		margin-left: 12rem;
	}
	
	.btn3 {
		@extend .btn1;
		margin-left: 13rem;
	}
	
	.btn4 {
		@extend .btn1;
		margin-left: 12rem;
	}
}
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
