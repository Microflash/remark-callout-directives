export default [
	{
		title: "note callout without any option",
		input: `:::note\n> Some **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "commend callout without any option",
		input: `:::commend\n- Some **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "warn callout without any option",
		input: `:::warn\n1. Some **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "deter callout without any option",
		input: `:::deter\n\`\`\`\nSome **content** with _Markdown_ \`syntax\`.\n\`\`\`\n:::`
	},
	{
		title: "assert callout without any option",
		input: `:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "callout with custom title",
		input: `:::warn{title="Be warned!"}\nSome **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "callout with markdown title",
		input: `:::warn{title="**Hold** on _there_!"}\nSome **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "custom shoutout callout",
		input: `:::shoutout{title="Well done!"}\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			callouts: {
				shoutout: {
					title: "Shoutout",
					hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint-shoutout" aria-hidden="true"><path d="M4.7 6.5h.01m8.49-2.8h.01m4.29 15.6h.01m2.79-8.5h.01m-6.41-.7 2.2-.7V6.5h2.8V3.7L21 3m-6.253 10.767c1.676-.175 2.93-.38 3.739-.064 1.234.483 1.497 1.529 1.409 3.008m-9.723-7.519c.175-1.676.38-2.93.064-3.739-.483-1.234-1.529-1.497-3.008-1.409M6.5 10.4l7.1 7.1L3 21z"/></svg>`
				}
			}
		}
	},
	{
		title: "aliased callout with alias configuration",
		input: `:::danger\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			aliases: {
				danger: "deter"
			}
		}
	},
	{
		title: "other callout with alias configuration",
		input: `:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			aliases: {
				danger: "deter"
			}
		}
	},
	{
		title: "matching callout with custom element type",
		input: `:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			callouts: {
				assert: {
					tagName: "div"
				}
			}
		}
	},
	{
		title: "unmatching callout with custom element type configuration",
		input: `:::note\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			callouts: {
				assert: {
					tagName: "div"
				}
			}
		}
	},
	{
		title: "matching callout with overriden default",
		input: `:::commend\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			callouts: {
				commend: {
					title: "Tip",
					hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>`
				}
			}
		}
	},
	{
		title: "unmatching callout with overriden default",
		input: `:::deter\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			callouts: {
				commend: {
					title: "Tip",
					hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>`
				}
			}
		}
	},
	{
		title: "callout with global custom element type",
		input: `:::note\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: { tagName: "section" }
	},
	{
		title: "callout with global custom element type and specific custom element type",
		input: `:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			tagName: "section",
			callouts: {
				assert: {
					tagName: "div"
				}
			}
		}
	},
	{
		title: "callouts with custom element type",
		input: `:::commend{is="blockquote"}\nSome **content** with _Markdown_ \`syntax\`.\n:::\n\n:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::\n\n:::note\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		options: {
			tagName: "div",
			callouts: {
				note: {
					tagName: "aside"
				}
			}
		}
	},
	{
		title: "callout with custom attributes",
		input: `:::note{.fancy .blob data-callout="fancy" #intrigue}\nSome **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "callout without hint",
		input: `:::note{showHint="false"}\nSome **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "callout as details element",
		input: `:::note{is="details"}\nSome **content** with _Markdown_ \`syntax\`.\n:::`
	},
	{
		title: "callout as open details element",
		input: `:::note{is="details" open}\nSome **content** with _Markdown_ \`syntax\`.\n:::`
	}
];
