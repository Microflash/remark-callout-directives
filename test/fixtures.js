export default [
	{
		title: "note callout without any option",
		input: `:::note\n> Some **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-note"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 8h.01M12 12v4"/><circle cx="12" cy="12" r="10"/></svg><div class="callout-title">Note</div></div><div class="callout-content"><blockquote>\n<p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p>\n</blockquote></div></aside>`
	},
	{
		title: "commend callout without any option",
		input: `:::commend\n- Some **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-commend"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="m8 12 2.7 2.7L16 9.3"/><circle cx="12" cy="12" r="10"/></svg><div class="callout-title">Success</div></div><div class="callout-content"><ul>\n<li>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</li>\n</ul></div></aside>`
	},
	{
		title: "warn callout without any option",
		input: `:::warn\n1. Some **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-warn"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 9v4m0 4h.01M8.681 4.082C9.351 2.797 10.621 2 12 2s2.649.797 3.319 2.082l6.203 11.904a4.28 4.28 0 0 1-.046 4.019C20.793 21.241 19.549 22 18.203 22H5.797c-1.346 0-2.59-.759-3.273-1.995a4.28 4.28 0 0 1-.046-4.019L8.681 4.082Z"/></svg><div class="callout-title">Warning</div></div><div class="callout-content"><ol>\n<li>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</li>\n</ol></div></aside>`
	},
	{
		title: "deter callout without any option",
		input: `:::deter\n\`\`\`\nSome **content** with _Markdown_ \`syntax\`.\n\`\`\`\n:::`,
		output: `<aside class="callout callout-deter"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 12s-5.6 4.6-3.6 8c1.6 2.6 5.7 2.7 7.2 0 2-3.7-3.6-8-3.6-8Z"/><path d="M13.004 2 8.5 9 6.001 6s-4.268 7.206-1.629 11.8c3.016 5.5 11.964 5.7 15.08 0C23.876 10 13.004 2 13.004 2Z"/></svg><div class="callout-title">Danger</div></div><div class="callout-content"><pre><code>Some **content** with _Markdown_ \`syntax\`.\n</code></pre></div></aside>`
	},
	{
		title: "assert callout without any option",
		input: `:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-assert"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><circle cx="19" cy="5" r="3"/><path d="M20 11.929V15c0 1.656-1.344 3-3 3h-3l-6 4v-4H5c-1.656 0-3-1.344-3-3V7c0-1.656 1.344-3 3-3h7.071"/></svg><div class="callout-title">Info</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "callout with custom title",
		input: `:::warn{title="Be warned!"}\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-warn"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 9v4m0 4h.01M8.681 4.082C9.351 2.797 10.621 2 12 2s2.649.797 3.319 2.082l6.203 11.904a4.28 4.28 0 0 1-.046 4.019C20.793 21.241 19.549 22 18.203 22H5.797c-1.346 0-2.59-.759-3.273-1.995a4.28 4.28 0 0 1-.046-4.019L8.681 4.082Z"/></svg><div class="callout-title">Be warned!</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "callout with markdown title",
		input: `:::warn{title="**Hold** on _there_!"}\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-warn"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 9v4m0 4h.01M8.681 4.082C9.351 2.797 10.621 2 12 2s2.649.797 3.319 2.082l6.203 11.904a4.28 4.28 0 0 1-.046 4.019C20.793 21.241 19.549 22 18.203 22H5.797c-1.346 0-2.59-.759-3.273-1.995a4.28 4.28 0 0 1-.046-4.019L8.681 4.082Z"/></svg><div class="callout-title"><strong>Hold</strong> on <em>there</em>!</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "custom shoutout callout",
		options: {
			callouts: {
				shoutout: {
					title: "Shoutout",
					hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint-shoutout" aria-hidden="true"><path d="M4.7 6.5h.01m8.49-2.8h.01m4.29 15.6h.01m2.79-8.5h.01m-6.41-.7 2.2-.7V6.5h2.8V3.7L21 3m-6.253 10.767c1.676-.175 2.93-.38 3.739-.064 1.234.483 1.497 1.529 1.409 3.008m-9.723-7.519c.175-1.676.38-2.93.064-3.739-.483-1.234-1.529-1.497-3.008-1.409M6.5 10.4l7.1 7.1L3 21z"/></svg>`
				}
			}
		},
		input: `:::shoutout{title="Well done!"}\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-shoutout"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint-shoutout" aria-hidden="true"><path d="M4.7 6.5h.01m8.49-2.8h.01m4.29 15.6h.01m2.79-8.5h.01m-6.41-.7 2.2-.7V6.5h2.8V3.7L21 3m-6.253 10.767c1.676-.175 2.93-.38 3.739-.064 1.234.483 1.497 1.529 1.409 3.008m-9.723-7.519c.175-1.676.38-2.93.064-3.739-.483-1.234-1.529-1.497-3.008-1.409M6.5 10.4l7.1 7.1L3 21z"/></svg><div class="callout-title">Well done!</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "aliased callout with alias configuration",
		options: {
			aliases: {
				danger: "deter"
			}
		},
		input: `:::danger\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-deter"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 12s-5.6 4.6-3.6 8c1.6 2.6 5.7 2.7 7.2 0 2-3.7-3.6-8-3.6-8Z"/><path d="M13.004 2 8.5 9 6.001 6s-4.268 7.206-1.629 11.8c3.016 5.5 11.964 5.7 15.08 0C23.876 10 13.004 2 13.004 2Z"/></svg><div class="callout-title">Danger</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "other callout with alias configuration",
		options: {
			aliases: {
				danger: "deter"
			}
		},
		input: `:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-assert"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><circle cx="19" cy="5" r="3"/><path d="M20 11.929V15c0 1.656-1.344 3-3 3h-3l-6 4v-4H5c-1.656 0-3-1.344-3-3V7c0-1.656 1.344-3 3-3h7.071"/></svg><div class="callout-title">Info</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "matching callout with custom element type",
		options: {
			callouts: {
				assert: {
					tagName: "div"
				}
			}
		},
		input: `:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<div class="callout callout-assert"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><circle cx="19" cy="5" r="3"/><path d="M20 11.929V15c0 1.656-1.344 3-3 3h-3l-6 4v-4H5c-1.656 0-3-1.344-3-3V7c0-1.656 1.344-3 3-3h7.071"/></svg><div class="callout-title">Info</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></div>`
	},
	{
		title: "unmatching callout with custom element type configuration",
		options: {
			callouts: {
				assert: {
					tagName: "div"
				}
			}
		},
		input: `:::note\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-note"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 8h.01M12 12v4"/><circle cx="12" cy="12" r="10"/></svg><div class="callout-title">Note</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "matching callout with overriden default",
		options: {
			callouts: {
				commend: {
					title: "Tip",
					hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>`
				}
			}
		},
		input: `:::commend\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-commend"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg><div class="callout-title">Tip</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "unmatching callout with overriden default",
		options: {
			callouts: {
				commend: {
					title: "Tip",
					hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>`
				}
			}
		},
		input: `:::deter\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-deter"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 12s-5.6 4.6-3.6 8c1.6 2.6 5.7 2.7 7.2 0 2-3.7-3.6-8-3.6-8Z"/><path d="M13.004 2 8.5 9 6.001 6s-4.268 7.206-1.629 11.8c3.016 5.5 11.964 5.7 15.08 0C23.876 10 13.004 2 13.004 2Z"/></svg><div class="callout-title">Danger</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	},
	{
		title: "callout with global custom element type",
		options: { tagName: "section" },
		input: `:::note\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<section class="callout callout-note"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 8h.01M12 12v4"/><circle cx="12" cy="12" r="10"/></svg><div class="callout-title">Note</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></section>`
	},
	{
		title: "callout with global custom element type and specific custom element type",
		options: {
			tagName: "section",
			callouts: {
				assert: {
					tagName: "div"
				}
			}
		},
		input: `:::assert\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<div class="callout callout-assert"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><circle cx="19" cy="5" r="3"/><path d="M20 11.929V15c0 1.656-1.344 3-3 3h-3l-6 4v-4H5c-1.656 0-3-1.344-3-3V7c0-1.656 1.344-3 3-3h7.071"/></svg><div class="callout-title">Info</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></div>`
	},
	{
		title: "callout with custom attributes",
		input: `:::note{.fancy .blob data-callout="fancy" #intrigue}\nSome **content** with _Markdown_ \`syntax\`.\n:::`,
		output: `<aside class="callout callout-note fancy blob" data-callout="fancy" id="intrigue"><div class="callout-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"><path d="M12 8h.01M12 12v4"/><circle cx="12" cy="12" r="10"/></svg><div class="callout-title">Note</div></div><div class="callout-content"><p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p></div></aside>`
	}
];
