import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { S as Shell } from "../../chunks/Shell.js";
const css = {
  code: ".hero-wrapper.svelte-9fwbwj{display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:aqua}.hero-title.svelte-9fwbwj{grid-area:3 / 1 / 9 / 11;text-align:center}.image-wrapper-1.svelte-9fwbwj{grid-area:1 / 7 / 4 / 9;background-color:blue}.image-wrapper-2.svelte-9fwbwj{grid-area:5 / 8 / 7 / 11;background-color:blue}.image-wrapper-3.svelte-9fwbwj{grid-area:2 / 2 / 5 / 4;background-color:blue}.image-wrapper-4.svelte-9fwbwj{grid-area:7 / 5 / 11 / 7;background-color:blue}.image-wrapper-5.svelte-9fwbwj{grid-area:6 / 1 / 9 / 4;background-color:blue}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="hero-wrapper svelte-9fwbwj" data-svelte-h="svelte-pafy1i"><h1 class="hero-title svelte-9fwbwj">CHRISTOPHER ARIEL&#39;S WEBPAGE</h1> <div class="image-wrapper-1 svelte-9fwbwj"></div> <div class="image-wrapper-2 svelte-9fwbwj"></div> <div class="image-wrapper-3 svelte-9fwbwj"></div> <div class="image-wrapper-4 svelte-9fwbwj"></div> <div class="image-wrapper-5 svelte-9fwbwj"></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Shell, "Shell").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} <p data-svelte-h="svelte-r03npe">this is root svelte page</p>`;
    }
  })}`;
});
export {
  Page as default
};
