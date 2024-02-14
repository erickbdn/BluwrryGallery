import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BY1yWDI0.js","app":"_app/immutable/entry/app.CxZbdXcw.js","imports":["_app/immutable/entry/start.BY1yWDI0.js","_app/immutable/chunks/entry.D40ana05.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.CxZbdXcw.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.C95nLGdf.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Gallery",
				pattern: /^\/Gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
