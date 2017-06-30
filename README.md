# Quill conv

Convert HTML to Quill Delta in node.

__This package is under heavy development, use it at your own risk__

## Usage

```javascript
import QuillConv from 'quill-conv'

new QuillConv().convert(html) // => Delta
```

## API

```typescript
interface QuillConv {

  /**
   * Options for QuillConv
   */
  options: Object

  /**
   * Window object used in Quill
   */
  window: Window

  /**
   * Constructor of Quill
   */
  Quill: Constructor<Quill>

  /**
   * The clipboard module
   */
  clipboard: Clipboard

  /**
   * Constructor
   */
  constructor(options: QuillConvOptions)

  /**
   * Convert html string to Quill Delta
   */
  convert(html: string): Delta
}

interface QuillConvOptions {

  /**
   * Source code of Quill
   */
  source: string

  /**
   * Path to source of Quill
   *
   * Default: require.resolve('quill/dist/quill.core')
   */
  path: string

  /**
   * Clipboard matchers
   *
   * Default: []
   */
  matchers: Array,
}
```
