/** main.ts */
import { defineStore } from "pinia"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export type SomeStateType = {
  counter: number
  name: string
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const usePiniaCounterStore = defineStore('main', {
  // ™ ____________
  state: () => ({
    counter: 0,
    name: 'AliasOne11'
  }) as SomeStateType,
  //..........
  getters: {
    doubleCount: (state: SomeStateType) => state.counter * 2
  },
  //..........
  actions: {
    addOne() {
      this.counter++
    }
    // reset() {
    //   this.counter = 0
    // },
  }
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
