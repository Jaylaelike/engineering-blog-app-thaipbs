;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ff99b911-5d27-42d2-807c-b4ea78201762",e._sentryDebugIdIdentifier="sentry-dbid-ff99b911-5d27-42d2-807c-b4ea78201762")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_wZpWy9a7.mjs';
import { $ as $$Image } from './_astro_assets_DJdZ6rQD.mjs';
import { a as $$YouTube } from './LinkPreview_Bn4nkvIU.mjs';
import 'clsx';

const frontmatter = {
  "heroImage": "/src/assets/images/Screenshot 2567-05-24 at 15.38.35.png",
  "category": "เครื่องมือวัด",
  "description": "การคำนวนก่อนก่อนใช้งาน Power Meter Sensor",
  "pubDate": "2022-07-01T17:00:00.000Z",
  "tags": ["เครื่องมือวัด", "การใช้งาน", " Power Meter Sensor", "E9321A"],
  "title": "การคำนวนก่อนก่อนใช้งาน Power Meter Sensor",
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
      id: "wY-0WBu8RX0"
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

const url = "src/content/blog/-Power-Meter-Sensor.mdx";
const file = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/content/blog/-Power-Meter-Sensor.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/content/blog/-Power-Meter-Sensor.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=-Power-Meter-Sensor_DLFcD07T.mjs.map
