import test from "ava"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import remarkDirective from "remark-directive"
import remarkCalloutDirectives from "../index.js"
import fixtures from "./fixtures.js"

async function process(markdown, options = {}) {
	const file = await unified()
		.use(remarkParse)
		.use(remarkDirective)
		.use(remarkCalloutDirectives, options)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeStringify, { allowDangerousHtml: true })
		.process(markdown)

	return String(file)
}

for (const fixture of fixtures) {
	const { title, input, output, options = {} } = fixture
	test(`test '${title}'`, async t => {
		const result = await process(input, options)
		t.is(output, result)
	})
}
