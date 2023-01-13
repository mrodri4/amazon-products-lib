/**
 * Prettier formatter configuration
 * 👀👉 https://prettier.io/docs/en/configuration.html#basic-configuration
 */
module.exports = {
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss' // MUST come last
  ],
  /**
   * Custom directory that contains prettier plugins in node_modules
   * subdirectory. Overrides default behavior when plugins are searched
   * relatively to the location of Prettier. Multiple values are accepted.
   * - Default: [] // empty array
   * - Possible values:
   *     - Array of paths where plugins should be searched by Prettier
   *     - false: Disable plugin autoloading
   */
  pluginSearchDirs: false,
  /**
   * Include parentheses around a sole arrow function parameter.
   * - Default: 'always'
   * - Possible values:
   *     - 'always': Always include parens. Example: `(x) => x`
   *     - 'avoid': Omit parens when possible. Example: `x => x`
   */
  arrowParens: 'always',
  /**
   * Put > of opening tags on the last line instead of on a new line.
   * - Default: false
   */
  bracketSameLine: false,
  /**
   * Print spaces between brackets.
   * - Default: true
   */
  bracketSpacing: true,
  /**
   * Control how Prettier formats quoted code embedded in the file.
   * - Default: 'auto'
   * - Possible values:
   *     - 'auto': Format embedded code if Prettier can automatically
   *       identify it.
   *     - 'off': Never automatically format embedded code.
   */
  embeddedLanguageFormatting: 'auto',
  /**
   * Which end of line characters to apply.
   * - Default: 'lf'
   * - Possible values:
   *     - 'lf': Line Feed only (`\n`), common on Linux and macOS as well as
   *       inside git repos.
   *     - 'crlf': Carriage Return + Line Feed characters (`\r\n`), common
   *       on Windows.
   *     - 'cr': Carriage Return character only (`\r`), used very rarely.
   *     - 'auto': Maintain existing (mixed values within one file are
   *       normalised by looking at what's used after the first line)
   */
  endOfLine: 'lf',
  /**
   * How to handle whitespaces in HTML.
   * - Default: 'css'
   * - Possible values:
   *     - 'css': Respect the default value of CSS display property.
   *     - 'strict': Whitespaces are considered sensitive.
   *     - 'ignore': Whitespaces are considered insensitive.
   */
  htmlWhitespaceSensitivity: 'css',
  /**
   * Insert `@format` pragma into file's first docblock comment.
   * - Default: false
   */
  insertPragma: false,
  /**
   * Use single quotes in JSX.
   * - Default: false
   */
  jsxSingleQuote: false,
  /**
   * The line length where Prettier will try wrap.
   * - Default: 80
   * - Possible values:
   *     - An integer value
   */
  printWidth: 80,
  /**
   * How to wrap prose.
   * - Default: 'preserve'
   * - Possible values:
   *     - 'always': Wrap prose if it exceeds the print width.
   *     - 'never': Un-wrap each block of prose into one line.
   *     - 'preserve': Wrap prose as-is.
   */
  proseWrap: 'preserve',
  /**
   * Change when properties in objects are quoted.
   * - Default: 'as-needed'
   * - Possible values:
   *     - 'as-needed': Only add quotes around object properties where required.
   *     - 'consistent': If at least one property in an object requires
   *       quotes, quote all properties.
   *     - 'preserve': Respect the input use of quotes in object properties.
   */
  quoteProps: 'as-needed',
  /**
   * Require either `@prettier` or `@format` to be present in the file's
   * first docblock comment in order for it to be formatted.",
   * - Default: false
   */
  requirePragma: false,
  /**
   * Print semicolons.
   * - Default: true
   */
  semi: true,
  /**
   * Enforce single attribute per line in HTML, Vue and JSX.
   * - Default: false
   */
  singleAttributePerLine: true,
  /**
   * Use single quotes instead of double quotes.
   * - Default: false
   * Inherit from EditorConfig
   */
  singleQuote: true,
  /**
   * Number of spaces per indentation level.
   * - Default: 2
   * - Possible values:
   *     - An integer value
   */
  tabWidth: 2,
  /**
   * Print trailing commas wherever possible when multi-line.
   * - Default: 'es5'
   * - Possible values:
   *     - 'es5': Trailing commas where valid in ES5 (objects, arrays, etc.)
   *     - 'none': No trailing commas.
   *     - 'all': Trailing commas wherever possible (including function
   *       arguments).
   */
  trailingComma: 'none',
  /**
   * Indent with tabs instead of spaces.
   * - Default: false
   */
  useTabs: false
  // Examples of rule overrides for any files 👀👇
  // https://prettier.io/docs/en/configuration.html#configuration-overrides
  // overrides: [
  //   {
  //     files: '*.test.js',
  //     options: {
  //       semi: true
  //     }
  //   },
  //   {
  //     files: ['*.html', 'legacy/**/*.js'],
  //     options: {
  //       tabWidth: 4
  //     }
  //   },
  // Setting the parser option (only in overrides configs) 👀👇
  // https://prettier.io/docs/en/configuration.html#setting-the-parserdocsenoptionshtmlparser-option
  //   {
  //     files: '.prettierrc',
  //     options: { 'parser': 'json' }
  //   }
  // ]
};
