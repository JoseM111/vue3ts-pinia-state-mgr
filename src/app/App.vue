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
@import './App.styles.scss';
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
