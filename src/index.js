import { visit } from "unist-util-visit";
import { fromMarkdown } from "mdast-util-from-markdown";
import { h } from "hastscript";
import { defu } from "defu";

function generate(title, children, hint, showIndicator) {
	const calloutNodes = [];

	if (showIndicator) {
		const indicators = [];

		if (hint) {
			indicators.push({
				type: "paragraph",
				data: {
					hName: "div",
					hProperties: { className: ["callout-hint"] }
				},
				children: [
					{
						type: "html",
						value: hint
					}
				]
			});
		}

		const titleNode = fromMarkdown(title).children[0];
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
		calloutNodes.push({
			type: "paragraph",
			data: {
				hName: "div",
				hProperties: { className: ["callout-indicator"] }
			},
			children: indicators
		});
	}

	calloutNodes.push({
		type: "paragraph",
		data: {
			hName: "div",
			hProperties: { className: ["callout-content"] }
		},
		children
	});

	return calloutNodes;
}

const defaults = {
	aliases: {},
	callouts: {
		note: {
			title: "Note",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 8h.01M12 12v4"/><circle cx="12" cy="12" r="10"/></svg>`
		},
		commend: {
			title: "Success",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="m8 12 2.7 2.7L16 9.3"/><circle cx="12" cy="12" r="10"/></svg>`
		},
		warn: {
			title: "Warning",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"/></svg>`
		},
		deter: {
			title: "Danger",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 12s-5.6 4.6-3.6 8c1.6 2.6 5.7 2.7 7.2 0 2-3.7-3.6-8-3.6-8Z"/><path d="M13.004 2 8.5 9 6.001 6s-4.268 7.206-1.629 11.8c3.016 5.5 11.964 5.7 15.08 0C23.876 10 13.004 2 13.004 2Z"/></svg>`
		},
		assert: {
			title: "Info",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><circle cx="19" cy="5" r="3"/><path d="M20 11.929V15c0 1.656-1.344 3-3 3h-3l-6 4v-4H5c-1.656 0-3-1.344-3-3V7c0-1.656 1.344-3 3-3h7.071"/></svg>`
		}
	}
};

export default function remarkCalloutDirectives(userOptions = {}) {
	const options = defu(userOptions, defaults);
	const { callouts } = options;
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
				const { title, showIndicator = "true", ...attributes } = node.attributes;

				node.attributes = {
					...attributes,
					class: "class" in attributes ? `callout callout-${calloutType} ${attributes.class}` : `callout callout-${calloutType}`
				};

				node.children = generate(
					title || callout.title,
					node.children,
					callout.hint,
					showIndicator.toLowerCase() === "true"
				);

				const tagName = callout.tagName || options.tagName || "aside";
				const hast = h(tagName, node.attributes);
				data.hName = hast.tagName;
				data.hProperties = hast.properties;
			}
		});
	};
}
