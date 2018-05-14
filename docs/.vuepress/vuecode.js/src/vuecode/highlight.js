// const highlightLines = require('./highlightLines.js')
var hljs = require('highlight.js') // https://highlightjs.org/

import 'highlight.js/styles/vs2015.css'

const RE = /{([\d,-]+)}/
const wrapperRE = /^<pre .*?><code>/

const highlightLines = md => {
  const fence = md.renderer.rules.fence
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, options] = args
    const token = tokens[idx]

    if (!token.info || !RE.test(token.info)) {
      return fence(...args)
    }

    const langName = token.info.replace(RE, '').trim()
    const lineNumbers = RE.exec(token.info)[1]
      .split(',')
      .map(v => v.split('-').map(v => parseInt(v, 10)))

    const code = options.highlight
      ? options.highlight(token.content, langName)
      : token.content

    const rawCode = code.replace(wrapperRE, '')
    const leadingWrapper = code.match(wrapperRE)[0]

    const codeSplits = rawCode.split('\n').map((split, index) => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) => {
        if (start && end) {
          return lineNumber >= start && lineNumber <= end
        }
        return lineNumber === start
      })
      if (inRange) {
        return {
          code: `<span class="highlighted-line">${split}</span>`,
          highlighted: true
        }
      }
      return {
        code: split
      }
    })
    let highlightedCode = leadingWrapper
    codeSplits.forEach(split => {
      if (split.highlighted) {
        highlightedCode += split.code
      } else {
        highlightedCode += `${split.code}\n`
      }
    })
    return highlightedCode
  }
}




var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><span data-code="${hljs.highlight(lang, str, true)}" class="flaticon-copy-content icon-copyx"></span><span class="tagx">${lang}</span><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (__) {}
    }

    return `<pre class="hljs"><span data-code="${hljs.highlight(lang, str, true)}" class="flaticon-copy-content icon-copyx"></span><span class="tagx">${lang}</span><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
}).use(highlightLines)



export default md
