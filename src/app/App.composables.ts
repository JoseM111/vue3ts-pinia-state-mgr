/** App.composables.ts */
import { SomeStateType, usePiniaCounterStore } from "@/pinia-store/useCounter"
import { storeToRefs } from "pinia"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰


export const useAppComposables = () => {
  // ™ ____________
  const main = usePiniaCounterStore()
  // const { addOne } = mapActions(usePiniaCounterStore, ['addOne'])
  const { addOne } = main // its a function not a ref
  const { counter, name, doubleCount } = storeToRefs(main)
  
  function add(value: number) {
    main.$patch((state: SomeStateType) => (
    state.counter += value
    ))
  }
  
  function reset() {
    main.$reset()
  }
  
  function newState() {
    main.$state = { counter: 15, name: 'Alisia' }
  }
  
  function subScribeToMutationState() {
    // ™ ____________
    main.$subscribe((mutation, state: SomeStateType) => {
      console.log('mutation:', mutation)
      console.log('state:', state)
    })
  }
  
  
  return { addOne, counter, name, doubleCount, add, reset, newState, subScribeToMutationState }
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
