import { c as create_ssr_component, v as validate_component, d as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
import { createClient } from "contentful";
import { S as Shell } from "../../../chunks/Shell.js";
createClient({
  space: "l870a0nmsryu",
  environment: "master",
  // defaults to 'master' if not set
  accessToken: "V_getIJIiQEXT36nMeEFQCOBHpAIzc3KisWzWNcEsB4"
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let photos = [];
  return `${validate_component(Shell, "Shell").$$render($$result, {}, {}, {
    default: () => {
      return `${each(photos, (photo) => {
        return `<div><h2>${escape(photo.fields.title)}</h2> <p>${escape(photo.fields.desc)}</p> <img${add_attribute("src", photo.fields.image.fields.file.url, 0)}${add_attribute("alt", photo.fields.title, 0)}> </div>`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
