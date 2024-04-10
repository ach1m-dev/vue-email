import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import { EMarkdown, useRender } from '../src'

describe('markdown component renders correctly', () => {
  it('renders the markdown in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `# This is a ~~chair~~ Table
| Heading 1 | Heading 2 |
| --------- | --------- |
| Cell 1    | Cell 2    |
| Cell 3    | Cell 4    |
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      '"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style=""><h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">This is a <del>chair</del> Table</h1><table><thead><tr><th align="center">Heading 1</th><th align="center">Heading 2</th></tr></thead><tbody><tr><td align="center">Cell 1</td><td align="center">Cell 2</td></tr><tr><td align="center">Cell 3</td><td align="center">Cell 4</td></tr></tbody></table></div>"',
    )
  })

  it('renders the headers in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Heading 1!
## Heading 2!
### Heading 3!
#### Heading 4!
##### Heading 5!
###### Heading 6!
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Heading 1!</h1>
<h2 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2rem">Heading 2!</h2>
<h3 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:1.75rem">Heading 3!</h3>
<h4 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:1.5rem">Heading 4!</h4>
<h5 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:1.25rem">Heading 5!</h5>
<h6 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:1rem">Heading 6!</h6>
</div>"`,
    )
  })

  it('renders text in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: '**This is sample bold text in markdown** and *this is italic text*',
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      '"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style=""><strong data-id="vue-email-text" style="font-weight:bold">This is sample bold text in markdown</strong> and <em data-id="vue-email-text" style="font-style:italic">this is italic text</em></div>"',
    )
  })

  it('renders links in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: 'Link to [Vue`-email](https://vuemail.net/)',
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      '"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style=""><p data-id="vue-email-text">Link to <a href="https://vuemail.net/" style="color:#007bff;text-decoration:underline;background-color:transparent" data-id="vue-email-link" target="_blank">Vue`-email</a></p></div>"',
    )
  })

  it('renders lists in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Below is a list

- Item One
- Item Two
- Item Three
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Below is a list</h1>
<ul><li>Item One</li>
<li>Item Two</li>
<li>Item Three</li></ul>
</div>"`,
    )
  })

  it('renders paragraphs in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Below are some paragraphs

Some paragraph

Some other paragraph

Another
paragraph
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Below are some paragraphs</h1>

<p data-id="vue-email-text">Some paragraph</p>

<p data-id="vue-email-text">Some other paragraph</p>

<p data-id="vue-email-text">Another paragraph</p>
</div>"`,
    )
  })

  it('renders paragraphs with multiple lines in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Below is a paragraph with multiple lines

Some paragraph  
with multiple  
lines
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Below is a paragraph with multiple lines</h1>

<p data-id="vue-email-text">Some paragraph<br>with multiple<br>lines</p>
</div>"`,
    )
  })

  it('renders paragraphs with strong important text in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Below are some paragraphs with strong important text

**Strong important text (asterisks)** at the beginning of a paragraph

__Strong important text (underscores)__ at the beginning of a paragraph

Some paragraph with **strong important text (asterisks)** somewhere within

Some paragraph with __strong important text (underscores)__ somewhere within

Some paragraph with  
**strong important text (asterisks)** at the start of a new line

Some paragraph with  
__strong important text (underscores)__ at the start of a new line
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Below are some paragraphs with strong important text</h1>

<p data-id="vue-email-text"><strong data-id="vue-email-text" style="font-weight:bold">Strong important text (asterisks)</strong> at the beginning of a paragraph</p>

<p data-id="vue-email-text"><strong data-id="vue-email-text" style="font-weight:bold">Strong important text (underscores)</strong> at the beginning of a paragraph</p>

<p data-id="vue-email-text">Some paragraph with <strong data-id="vue-email-text" style="font-weight:bold">strong important text (asterisks)</strong> somewhere within</p>

<p data-id="vue-email-text">Some paragraph with <strong data-id="vue-email-text" style="font-weight:bold">strong important text (underscores)</strong> somewhere within</p>

<p data-id="vue-email-text">Some paragraph with<br><strong data-id="vue-email-text" style="font-weight:bold">strong important text (asterisks)</strong> at the start of a new line</p>

<p data-id="vue-email-text">Some paragraph with<br><strong data-id="vue-email-text" style="font-weight:bold"strong important text (underscores)</strong> at the start of a new line</p>
</div>"`,
    )
  })

  it('renders paragraphs with emphasized text in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Below are some paragraphs with emphasized text

*Emphasized text (asterisks)* at the beginning of a paragraph

_Emphasized text (underscores)_ at the beginning of a paragraph

Some paragraph with *emphasized text (asterisks)* somewhere within

Some paragraph with _emphasized text (underscores)_ somewhere within

Some paragraph with  
*emphasized text (asterisks)* at the start of a new line

Some paragraph with  
_emphasized text (underscores)_ at the start of a new line
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Below are some paragraphs with strong important text</h1>

<p data-id="vue-email-text"><em data-id="vue-email-text" style="font-style:italic">Emphasized text (asterisks)</em> at the beginning of a paragraph</p>

<p data-id="vue-email-text"><em data-id="vue-email-text" style="font-style:italic">Emphasized text (underscores)</em> at the beginning of a paragraph</p>

<p data-id="vue-email-text">Some paragraph with <em data-id="vue-email-text" style="font-style:italic">emphasized text (asterisks)</em> somewhere within</p>

<p data-id="vue-email-text">Some paragraph with <em data-id="vue-email-text" style="font-style:italic">emphasized text (underscores)</em> somewhere within</p>

<p data-id="vue-email-text">Some paragraph with<br><em data-id="vue-email-text" style="font-style:italic">emphasized text (asterisks)</em> at the start of a new line</p>

<p data-id="vue-email-text">Some paragraph with<br><p data-id="vue-email-text"><em data-id="vue-email-text" style="font-style:italic">emphasized text (underscores)</em> at the start of a new line</p></p>
</div>"`,
    )
  })

  it('renders paragraphs with deleted text in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Below are some paragraphs with deleted text

~~Emphasized text~~ at the beginning of a paragraph

Some paragraph with ~~emphasized text~~ somewhere within

Some paragraph with  
~~emphasized text~~ at the start of a new line
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Below are some paragraphs with deleted text</h1>

<p data-id="vue-email-text"><del>Emphasized text</del> at the beginning of a paragraph</p>

<p data-id="vue-email-text">Some paragraph with <del>emphasized text</del> somewhere within</p>

<p data-id="vue-email-text">Some paragraph with<br><del>emphasized text</del> at the start of a new line</p>
</div>"`,
    )
  })

  it('renders paragraphs with code text in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Below are some paragraphs with code text

\`Code text\` at the beginning of a paragraph

Some paragraph with \`code text\` somewhere within

Some paragraph with  
\`emphasized text\` at the start of a new line
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Below are some paragraphs with code text</h1>

<p data-id="vue-email-text"><code style="color:#212529;font-size:87.5%;display:inline;background: #f8f8f8;font-family:SFMono-Regular,Menlo,Monaco,Consolas,monospace;word-wrap:break-word">Code text</code> at the beginning of a paragraph</p>

<p data-id="vue-email-text">Some paragraph with <code style="color:#212529;font-size:87.5%;display:inline;background: #f8f8f8;font-family:SFMono-Regular,Menlo,Monaco,Consolas,monospace;word-wrap:break-word">code text</code> somewhere within</p>

<p data-id="vue-email-text">Some paragraph with<br><code style="color:#212529;font-size:87.5%;display:inline;background: #f8f8f8;font-family:SFMono-Regular,Menlo,Monaco,Consolas,monospace;word-wrap:break-word">code text</code> at the start of a new line</p>
</div>"`,
    )
  })

  it('renders paragraphs with linked text in the correct format for browsers', async () => {
    const component = h(EMarkdown, {
      source: `
# Below are some paragraphs with linked text

[Some link](https://github.com/vue-email/vue-email) at the beginning of a paragraph

Some paragraph with [some link](https://github.com/vue-email/vue-email) somewhere within

Some paragraph with  
[some link](https://github.com/vue-email/vue-email) at the start of a new line
`,
    })

    const actualOutput = await useRender(component)

    expect(actualOutput.html).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><div data-id="__vue-email-markdown" style="">
<h1 data-id="vue-email-heading" style="font-weight:500;padding-top:20;font-size:2.5rem">Below are some paragraphs with linked text</h1>

<p data-id="vue-email-text"><a href="https://github.com/vue-email/vue-email" style="color:#007bff;text-decoration:underline;background-color:transparent" data-id="vue-email-link" target="_blank">Some link</a> at the beginning of a paragraph</p>

<p data-id="vue-email-text">Some paragraph with <a href="https://github.com/vue-email/vue-email" style="color:#007bff;text-decoration:underline;background-color:transparent" data-id="vue-email-link" target="_blank">some link</a> somewhere within</p>

<p data-id="vue-email-text">Some paragraph with<br><a href="https://github.com/vue-email/vue-email" style="color:#007bff;text-decoration:underline;background-color:transparent" data-id="vue-email-link" target="_blank">some link</a> at the start of a new line</p>
</div>"`,
    )
  })
})
