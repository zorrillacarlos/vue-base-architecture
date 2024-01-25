import type { Ref } from "vue";

export interface IBaseComposable {
  counter: Ref<number>;
  increase(): number
}