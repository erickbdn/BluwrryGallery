

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CiRo3GIq.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.C95nLGdf.js","_app/immutable/chunks/Shell.Hk8VwvXk.js"];
export const stylesheets = ["_app/immutable/assets/2.CM33fYl3.css","_app/immutable/assets/Shell.JB42f0gL.css"];
export const fonts = [];
