import fs from 'fs'
import vm from 'vm'
import { JSDOM } from '@gzzhanghao/jsdom'

export default class QuillConv {

  constructor(options = {}) {
    this.options = options
    this.window = new JSDOM().window

    vm.runInNewContext(options.source || fs.readFileSync(options.path || require.resolve('quill/dist/quill.core'), 'utf-8'), this.window)

    this.Quill = this.window.Quill

    const Clipboard = this.Quill.import('modules/clipboard')

    this.clipboard = new Clipboard({
      root: { addEventListener() { } },
      addContainer: className => {
        const container = this.window.document.createElement('div')
        container.classList.add(className)
        return container
      },
    }, { matchers: options.matchers || [] })
  }

  convert(html) {
    return this.clipboard.convert(html)
  }
}
