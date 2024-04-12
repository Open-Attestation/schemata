// https://stackoverflow.com/questions/73470835/npm-build-error-with-svelte-plugin-typescript-rollup-plugin-typescript-ts2307
import type { SvelteComponentTyped } from "svelte";

declare module "*.svelte" {
  export default SvelteComponentTyped;
}
