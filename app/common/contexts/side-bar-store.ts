import { persistentAtom } from "@nanostores/persistent";
import { onMount } from "nanostores";

export const $isCollapsed = persistentAtom<boolean>("side-bar", true, {
  listen: true,
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const setCollapsed = (value: boolean) => $isCollapsed.set(value);

onMount($isCollapsed, () => setCollapsed($isCollapsed.get()));
