;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bc06e722-7d2b-43dc-8b08-f2e9829f8167",e._sentryDebugIdIdentifier="sentry-dbid-bc06e722-7d2b-43dc-8b08-f2e9829f8167")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_wZpWy9a7.mjs';
import { $ as $$Image } from './_astro_assets_DJdZ6rQD.mjs';
import { a as $$YouTube } from './LinkPreview_Bn4nkvIU.mjs';
import 'clsx';

const frontmatter = {
  "heroImage": "/src/assets/images/Screenshot 2567-05-02 at 16.51.06.png",
  "category": "เครื่องมือวัด",
  "description": "ตรวจเช็คค่า Parameter และทำ Precorrection #3",
  "pubDate": "2024-06-11T17:00:00.000Z",
  "tags": ["กรุงเทพ", "เครื่องมือวัด", "การใช้งาน", " Power Meter Sensor", "E9321A"],
  "title": "ตรวจเช็คค่า Parameter และทำ Precorrection #3",
  "minutesRead": "1 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "วีดีโอสาธิตการใช้งาน",
    "text": "วีดีโอสาธิตการใช้งาน"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "วีดีโอสาธิตการใช้งาน",
      children: "วีดีโอสาธิตการใช้งาน"
    }), "\n", createVNode($$YouTube, {
      id: "MVyeQlES_l4"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/-Parameter--Precorrection-3.mdx";
const file = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/content/blog/-Parameter--Precorrection-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/content/blog/-Parameter--Precorrection-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=-Parameter--Precorrection-3_D23Eg_9B.mjs.map
