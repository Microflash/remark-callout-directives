/**
 * @typedef {Object} Callout
 * @property {string} title - The display title of the callout.
 * @property {string} hint - SVG markup string representing the callout's icon.
 * @property {string} [tagName] - Optional HTML tag name for the callout wrapper.
 */

/**
 * @typedef {Object.<string, string>} Aliases
 * An object that maps aliases to an existing callout type.
 */

/**
 * @typedef {Object} CalloutPrefs
 * @property {string} [hint] - Optional SVG icon representing the callout type
 * @property {boolean} collapsible - Whether the callout is collapsible (default: `false`), only `true` when tagName is `details`
 * @property {boolean} showHint - Whether to display the hint icon (default: `true`)
 */

/**
 * @typedef {Object} CalloutOptions
 * @property {Aliases} [aliases] - Custom aliases for existing callouts.
 * @property {Object.<string, Callout>} [callouts] - Configuration for each callout type.
 * @property {string} [tagName] - Global HTML tag name used for wrapping the callout (default: 'aside').
 * @property {Function} [generate] - Function that creates the MDAST representation of a callout body.
 */

import { visit } from "unist-util-visit";
import { fromMarkdown } from "mdast-util-from-markdown";
import { h } from "hastscript";

/**
 * `defu` used for deep merging of configuration objects.
 * Unlike `Object.assign`, which performs a shallow merge, `defu` merges nested properties,
 * ensuring that user-defined options extend rather than overwrite default options.
 */
import { defu } from "defu";

/**
 * Default configuration for the plugin.
 * Contains default callout types, and the callout generator function.
 * @namespace defaults
 * @property {Aliases} aliases - Default mapping of some commonly used callout aliases.
 * @property {Object.<string, Callout>} callouts - Default configurations for supported callout types.
 * @property {Function} generate - Function that creates the MDAST representation of a callout body.
 */
const defaults = {
	aliases: {},
	callouts: {
		assert: {
			title: "Info",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><circle cx="19" cy="5" r="3"/><path d="M20 11.929V15c0 1.656-1.344 3-3 3h-3l-6 4v-4H5c-1.656 0-3-1.344-3-3V7c0-1.656 1.344-3 3-3h7.071"/></svg>`
		},
		commend: {
			title: "Success",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="m8 12 2.7 2.7L16 9.3"/><circle cx="12" cy="12" r="10"/></svg>`
		},
		deter: {
			title: "Danger",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 12s-5.6 4.6-3.6 8c1.6 2.6 5.7 2.7 7.2 0 2-3.7-3.6-8-3.6-8Z"/><path d="M13.004 2 8.5 9 6.001 6s-4.268 7.206-1.629 11.8c3.016 5.5 11.964 5.7 15.08 0C23.876 10 13.004 2 13.004 2Z"/></svg>`
		},
		note: {
			title: "Note",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 8h.01M12 12v4"/><circle cx="12" cy="12" r="10"/></svg>`
		},
		warn: {
			title: "Warning",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"/></svg>`
		}
	},
	/**
   * Generates a callout body from title, children, and preferences.
   * @function defaults.generate
   * @param {string} title - The callout title, can be plaintext or markdown.
   * @param {Array<Object>} children - Array of MDAST nodes representing the content inside the callout.
   * @param {CalloutPrefs} prefs - Preferences for generating the callout.
   * @returns {Array<Object>} An array of MDAST nodes forming the callout body.
   */
	generate(title, children, prefs) {
		const calloutNodes = [];
		const indicators = [];

		if (prefs.showHint && prefs.hint) {
			indicators.push({
				type: "paragraph",
				data: {
					hName: "div",
					hProperties: { className: ["callout-hint"] }
				},
				children: [
					{
						type: "html",
						value: prefs.hint
					}
				]
			});
		}

		const titleNode = fromMarkdown(title).children.at(0);
		if (titleNode.type === "paragraph") {
			titleNode.data = {
				hName: "div",
				hProperties: { className: ["callout-title"] }
			};
		} else {
			titleNode.data = {
				hProperties: { className: ["callout-title"] }
			};
		}
		indicators.push(titleNode);

		if (prefs.collapsible) {
			calloutNodes.push({
				type: "paragraph",
				data: {
					hName: "summary",
				},
				children: [{
					type: "paragraph",
					data: {
						hName: "div",
						hProperties: { className: ["callout-indicator"] }
					},
					children: indicators
				}]
			});
		} else {
			calloutNodes.push({
				type: "paragraph",
				data: {
					hName: "div",
					hProperties: { className: ["callout-indicator"] }
				},
				children: indicators
			});
		}

		if (children) {
			calloutNodes.push({
				type: "paragraph",
				data: {
					hName: "div",
					hProperties: { className: ["callout-content"] }
				},
				children
			});
		}

		return calloutNodes;
	}
};

/**
 * Remark plugin to render container directives (such as, :::note) into callout elements.
 * @function remarkCalloutDirectives
 * @param {CalloutOptions} [userOptions={}] - User-defined options that override defaults.
 * @returns {undefined} Unified transformer function that modifies the MDAST.
 */
export default function remarkCalloutDirectives(userOptions = {}) {
	const options = defu(userOptions, defaults);
	const { callouts, generate } = options;
	const aliases = defu(options.aliases, Object.keys(callouts).reduce((a, v) => ({ ...a, [v]: v}), {}));
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === "containerDirective") {
				if (!aliases[node.name]) {
					return;
				}

				const calloutType = aliases[node.name];
				const callout = callouts[calloutType];
				const data = node.data || (node.data = {});
				const { title, showHint = "true", is, ...attributes } = node.attributes;
				const tagName = is || callout.tagName || options.tagName || "aside";

				node.attributes = {
					...attributes,
					class: "class" in attributes ? `callout callout-${calloutType} ${attributes.class}` : `callout callout-${calloutType}`
				};

				node.children = generate(
					title || callout.title,
					node.children,
					{
						hint: callout.hint,
						collapsible: tagName === "details",
						showHint: showHint.toLowerCase() === "true"
					}
				);

				const hast = h(tagName, node.attributes);
				data.hName = hast.tagName;
				data.hProperties = hast.properties;
			}
		});
	};
}
