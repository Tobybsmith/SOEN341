
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MAIL: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const XDG_SESSION_TYPE: string;
	export const CSF_TObjDefaults: string;
	export const npm_node_execpath: string;
	export const BROWSER: string;
	export const CSF_XCAFDefaults: string;
	export const CSF_XSMessage: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const LESS: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const CSF_TObjMessage: string;
	export const MMGT_CLEAR: string;
	export const OLDPWD: string;
	export const npm_package_json: string;
	export const LSCOLORS: string;
	export const CSF_ShadersDirectory: string;
	export const ZSH: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const PAGER: string;
	export const DRAWHOME: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const CSF_IGESDefaults: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const CASROOT: string;
	export const COLOR: string;
	export const npm_config_metrics_registry: string;
	export const MOZ_PLUGIN_PATH: string;
	export const LOGNAME: string;
	export const WINDOWID: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const CSF_LANGUAGE: string;
	export const XDG_SESSION_CLASS: string;
	export const XTERM_SHELL: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_cache: string;
	export const AUTOJUMP_ERROR_PATH: string;
	export const WINDOWPATH: string;
	export const LC_COLLATE: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_RUNTIME_DIR: string;
	export const CSF_XmlOcafResource: string;
	export const DISPLAY: string;
	export const PW_TS_ESM_ON: string;
	export const LANG: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const CSF_StandardDefaults: string;
	export const npm_lifecycle_script: string;
	export const CSF_PluginDefaults: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const CSF_SHMessage: string;
	export const CSF_STEPDefaults: string;
	export const PLAYWRIGHT_TEST_BASE_URL: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const JAVA_HOME: string;
	export const PWD: string;
	export const CSF_StandardLiteDefaults: string;
	export const npm_execpath: string;
	export const CSF_DrawPluginDefaults: string;
	export const CSF_MIGRATION_TYPES: string;
	export const XTERM_LOCALE: string;
	export const npm_config_global_prefix: string;
	export const CSF_OCCTResourcePath: string;
	export const AUTOJUMP_SOURCED: string;
	export const DRAWDEFAULT: string;
	export const XTERM_VERSION: string;
	export const npm_command: string;
	export const MANPATH: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MAIL: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		XDG_SESSION_TYPE: string;
		CSF_TObjDefaults: string;
		npm_node_execpath: string;
		BROWSER: string;
		CSF_XCAFDefaults: string;
		CSF_XSMessage: string;
		SHLVL: string;
		npm_config_noproxy: string;
		LESS: string;
		MOTD_SHOWN: string;
		HOME: string;
		CSF_TObjMessage: string;
		MMGT_CLEAR: string;
		OLDPWD: string;
		npm_package_json: string;
		LSCOLORS: string;
		CSF_ShadersDirectory: string;
		ZSH: string;
		CSF_MDTVTexturesDirectory: string;
		PAGER: string;
		DRAWHOME: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		CSF_IGESDefaults: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		CASROOT: string;
		COLOR: string;
		npm_config_metrics_registry: string;
		MOZ_PLUGIN_PATH: string;
		LOGNAME: string;
		WINDOWID: string;
		_: string;
		npm_config_prefix: string;
		CSF_LANGUAGE: string;
		XDG_SESSION_CLASS: string;
		XTERM_SHELL: string;
		TERM: string;
		XDG_SESSION_ID: string;
		npm_config_cache: string;
		AUTOJUMP_ERROR_PATH: string;
		WINDOWPATH: string;
		LC_COLLATE: string;
		npm_config_node_gyp: string;
		PATH: string;
		NODE: string;
		npm_package_name: string;
		XDG_RUNTIME_DIR: string;
		CSF_XmlOcafResource: string;
		DISPLAY: string;
		PW_TS_ESM_ON: string;
		LANG: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		CSF_StandardDefaults: string;
		npm_lifecycle_script: string;
		CSF_PluginDefaults: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		CSF_SHMessage: string;
		CSF_STEPDefaults: string;
		PLAYWRIGHT_TEST_BASE_URL: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		JAVA_HOME: string;
		PWD: string;
		CSF_StandardLiteDefaults: string;
		npm_execpath: string;
		CSF_DrawPluginDefaults: string;
		CSF_MIGRATION_TYPES: string;
		XTERM_LOCALE: string;
		npm_config_global_prefix: string;
		CSF_OCCTResourcePath: string;
		AUTOJUMP_SOURCED: string;
		DRAWDEFAULT: string;
		XTERM_VERSION: string;
		npm_command: string;
		MANPATH: string;
		CSF_EXCEPTION_PROMPT: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
