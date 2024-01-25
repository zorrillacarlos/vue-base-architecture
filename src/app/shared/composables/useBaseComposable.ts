import { ref, type Ref } from "vue";
import type { IBaseComposable } from "./interfaces/IBaseComposable.interface";

export default function useBaseComposable(): IBaseComposable {
  const counter: Ref<number> = ref<number>(0);
  const increase = (): number => counter.value ++;

  return {
    counter,
    increase
  }
}