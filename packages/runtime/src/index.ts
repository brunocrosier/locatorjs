import { Target } from "@locator/shared";
import { AdapterId } from "./consts";
import { initRuntime } from "./initRuntime";
import { isExtension } from "./isExtension";
export * from "./adapters/jsx/runtimeStore";

// Init in case it is used from extension
if (typeof window !== "undefined" && isExtension()) {
  setTimeout(() => initRuntime({ adapter: "auto" }), 0);
}

export const MAX_ZINDEX = 2147483647;

export function setup({
  adapter,
  targets,
}: {
  adapter?: AdapterId;
  // defaultMode?: LocatorJSMode;
  targets?: { [k: string]: Target | string };
} = {}) {
  setTimeout(() => initRuntime({ adapter, targets }), 0);
}

export default setup;
