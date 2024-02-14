import { persistentAtom } from "@nanostores/persistent";
import { action, onMount } from "nanostores";

export const $isCollapsed = persistentAtom<boolean>("side-bar", true, {
  listen: true,
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const setCollapsed = action(
  $isCollapsed,
  "setCollapsed",
  (_, value: boolean) => $isCollapsed.set(value),
);

onMount($isCollapsed, () => setCollapsed($isCollapsed.get()));
