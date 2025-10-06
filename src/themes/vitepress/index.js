import { fromMarkdown } from "mdast-util-from-markdown";

export default {
	aliases: {
		info: "note",
		tip: "commend",
		important: "assert",
		warning: "warn",
		danger: "deter"
	},
	callouts: {
		note: {
			title: "Info"
		},
		commend: {
			title: "Tip"
		},
		assert: {
			title: "Important"
		}
	},
	generate(title, children, prefs) {
		const calloutNodes = [];
		const indicators = [];

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
