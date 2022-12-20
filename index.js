import { visit } from "unist-util-visit"
import { fromHtml } from "hast-util-from-html"
import { toMdast } from "hast-util-to-mdast"
import { h } from "hastscript"
import { defu } from "defu"

const hastOptions = { fragment: true }

function generate(title, children, hint) {
	const indicators = []

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
					value: fromHtml(hint, hastOptions)
				}
			]
		})
	}

	indicators.push({
		type: "paragraph",
		data: {
			hName: "div",
			hProperties: { className: ["callout-title"] }
		},
		children: toMdast(fromHtml(title, hastOptions)).children
	})

	return [ 
		{
			type: "paragraph",
			data: {
				hName: "div",
				hProperties: { className: ["callout-indicator"] }
			},
			children: indicators
		},
		{
			type: "paragraph",
			data: {
				hName: "div",
				hProperties: { className: ["callout-content"] }
			},
			children
		}
	]
}

const defaults = {
	aliases: {},
	callouts: {
		note: {
			title: "Note",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint-note"><path d="M12 8h.01M12 12v4"/><circle cx="12" cy="12" r="10"/></svg>`
		},
		commend: {
			title: "Success",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint-commend"><path d="m8 12 2.7 2.7L16 9.3"/><circle cx="12" cy="12" r="10"/></svg>`
		},
		warn: {
			title: "Warning",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint-warn"><path d="M12 9v4m0 4h.01M8.681 4.082C9.351 2.797 10.621 2 12 2s2.649.797 3.319 2.082l6.203 11.904a4.28 4.28 0 0 1-.046 4.019C20.793 21.241 19.549 22 18.203 22H5.797c-1.346 0-2.59-.759-3.273-1.995a4.28 4.28 0 0 1-.046-4.019L8.681 4.082Z"/></svg>`
		},
		deter: {
			title: "Danger",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint-deter"><path d="M12 12s-5.6 4.6-3.6 8c1.6 2.6 5.7 2.7 7.2 0 2-3.7-3.6-8-3.6-8Z"/><path d="M13.004 2 8.5 9 6.001 6s-4.268 7.206-1.629 11.8c3.016 5.5 11.964 5.7 15.08 0C23.876 10 13.004 2 13.004 2Z"/></svg>`
		},
		assert: {
			title: "Info",
			hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint-assert"><path d="M12.5 7.5h.01m-.01 4v4m-7.926.685L2 21l6.136-1.949c1.307.606 2.791.949 4.364.949 5.243 0 9.5-3.809 9.5-8.5S17.743 3 12.5 3 3 6.809 3 11.5c0 1.731.579 3.341 1.574 4.685"/></svg>`
		}
	}
}

export default function remarkCalloutDirectives(userOptions = {}) {
	const options = defu(userOptions, defaults)
	const { callouts } = options
	const aliases = defu(options.aliases, Object.keys(callouts).reduce((a, v) => ({ ...a, [v]: v}), {}))
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === "containerDirective") {
				if (!aliases[node.name]) {
					return
				}

				const calloutType = aliases[node.name]
				const callout = callouts[calloutType]
				const data = node.data || (node.data = {})
				const { title, ...attributes } = node.attributes

				node.attributes = {
					...attributes,
					class: `callout callout-${calloutType}`
				}

				node.children = generate(title || callout.title, node.children, callout.hint)

				const tagName = callout.tagName || "aside"
				data.hName = tagName
				data.hProperties = h(tagName, node.attributes).properties
			}
		})
	}
}
