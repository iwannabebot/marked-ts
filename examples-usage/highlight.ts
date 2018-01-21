import { Marked } from '../';
import { highlight } from 'highlight.js';

Marked.setOptions({ highlight: (code, lang) => highlight(lang, code).value });

console.log(Marked.parse('```js\n console.log("hello"); \n```'));
