import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

const processor = unified().use(markdown).use(remark2rehype).use(html);
const input = `
# はじめてのRemark
**太字**_斜体_テキスト

* https://flaviocopes.com/how-to-enable-es-modules-nodejs/
* <https://flaviocopes.com/how-to-enable-es-modules-nodejs/>
`;
processor.process(input).then((res) => {
  console.log(res);
});
