;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="38118ef8-6c38-43de-8a61-79b8bcc600a7",e._sentryDebugIdIdentifier="sentry-dbid-38118ef8-6c38-43de-8a61-79b8bcc600a7")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, d as createVNode } from './astro/server_wZpWy9a7.mjs';
import { $ as $$Image } from './_astro_assets_DJdZ6rQD.mjs';
import './LinkPreview_Bn4nkvIU.mjs';
import 'clsx';

const frontmatter = {
  "heroImage": "/src/assets/images/ade72a0adffd77a1dead3fa9724ba57f45ceaa0e-1479x1109.jpg",
  "category": "Transmitter",
  "description": "การแก้ไขปัญหาเครื่องส่ง NEC สถานีระนองออกอากาศ ได้ไม่เต็ม 100%",
  "pubDate": "2022-07-01T22:00:00.000Z",
  "draft": false,
  "tags": ["ชุมพร", "ระนอง", "การแก้ไขปัญหา", "เครื่องส่ง"],
  "title": "การแก้ไขปัญหาเครื่องส่ง NEC สถานีระนองออกอากาศ ได้ไม่เต็ม 100%",
  "minutesRead": "1 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "การแก้ไขปัญหาเครื่องส่ง-nec-สถานีระนองออกอากาศ-ได้ไม่เต็ม100",
    "text": "การแก้ไขปัญหาเครื่องส่ง NEC สถานีระนองออกอากาศ ได้ไม่เต็ม 100%"
  }, {
    "depth": 3,
    "slug": "ขั้นตอนการตรวจสอบ",
    "text": "ขั้นตอนการตรวจสอบ"
  }, {
    "depth": 3,
    "slug": "วิธีการแก้ไข",
    "text": "วิธีการแก้ไข"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "การแก้ไขปัญหาเครื่องส่ง-nec-สถานีระนองออกอากาศ-ได้ไม่เต็ม100",
      children: "การแก้ไขปัญหาเครื่องส่ง NEC สถานีระนองออกอากาศ ได้ไม่เต็ม 100%"
    }), "\n", createVNode(_components.p, {
      children: "อาการเสีย"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "เครื่องส่ง NEC ของ MUX มีปัญหาออกอากาศด้วย Power output ได้ไม่ถึง 100%"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/a20649457e237d5daa2a04dfe96a75fa9dfd2a28-1434x899.jpg",
        alt: ""
      })
    }), "\n", createVNode(_components.h3, {
      id: "ขั้นตอนการตรวจสอบ",
      children: "ขั้นตอนการตรวจสอบ"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "ทำการ ON เครื่องส่ง MUX ที่มีปัญหาลง Dummy"
      }), "\n", createVNode(_components.li, {
        children: "ทำการปิดการใช้งาน AGC พบว่าค่า Power ก่อนและหลังปิดไม่มีการเปลี่ยนแปลง"
      }), "\n", createVNode(_components.li, {
        children: "ทำการวัด Power ที่เครื่องส่งออกอากาศ ทำการตรวจสอบว่า Power ที่ออก 80% ที่แสดงหน้า Txcontrol ออก 80% จรึงหรือไม่"
      }), "\n", createVNode(_components.li, {
        children: "ทำการตรวจสอบและเปรียบเทียบค่าพารามิเตอร์ของ PA ตอนทำงานปกติกับตอนมีปัญหา ว่า PA ทำงานได้ปกติทั้งสองตัว กำลังส่งและกระแสมีความผิดปกติหรือไม่"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "จากการตรวจสอบในครั้งนี้ ใช้ Power Meter วัด Power ที่ออกหลังของเครื่องส่ง ทำการวัดได้ P = 472.481 W ซึ่งใกล้เคียงกับค่าที่แสดงที่ Txcontrol Output 80% = 466w และ ทำการเปรียบเทียบพารามิเตอร์ของ PA พบว่าค่า Power ตกทั้งสองตัว หลังการเปรียบเทียบค่าพารามิเตอร์ก่อนมีปัญหาและตอนมีปัญหา ค่ากระแส DPA เท่าเดิม ส่วนค่า FPA มีการกินกระแสที่ลดลงทั้ง 2 PA"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/dccd1464e23e981b34ee049c3552e9076b52d525-1479x1109.jpg",
        alt: ""
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/c7077be4f3409f012156ab1a1e2b128dfe89f6d7-1278x649.jpg",
        alt: ""
      })
    }), "\n", createVNode(_components.h3, {
      id: "วิธีการแก้ไข",
      children: "วิธีการแก้ไข"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["ทำการปิด AGC ที่ Exciter ของเครื่อง Mux โดยการ เข้าหน้า Exciter >> ทำการลาก AGC ลงมา >> Automatic Gain Control >> AGC แล้วทำการเอาเครื่องหมาย √ ที่ Enable ออก", createVNode(_components.img, {
          src: "https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/ece47295ca876d461c5850694bfa09c351b1c7cd-1007x772.png",
          alt: ""
        })]
      }), "\n", createVNode(_components.li, {
        children: ["ทำการปรับเพิ่ม Power ของเครื่องส่ง เข้าหน้า Exciter >> ลาก RF Output ลงมา >> Settings >> Level โดยจะทำการปรับเพิ่มค่า Level เมื่อปรับเพิ่มค่า Level กำลังส่งของเครื่องส่งจะเพิ่มขึ้นด้วย โดยจะปรับเพิ่มทีละ 0.1 dBm แล้วทำการวัด Power ที่ออกจริงด้วย Power meter โดยปรับจนกำลังส่งออกได้ตามที่ต้องการ", createVNode(_components.img, {
          src: "https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/70cd262ab0d29501cde00bc12359ed3f1c79e4a4-1002x768.png",
          alt: ""
        })]
      }), "\n", createVNode(_components.li, {
        children: "เมื่อปรับกำลังส่งได้แล้ว ให้รอไว้สักแปปค่า Power จะเพิ่มขึ้นเอง ให้เราเราทำการปรับค่า Level ให้ลดลง ค่า Power ก็จะลดลงเรื่อยๆ ปรับลดลงจนค่ากลับมาเท่าเดิม (ค่า Level ที่ก่อนการปรับเพิ่มขึ้น) ค่ากำลังส่งจะกลับมาปกติ"
      }), "\n", createVNode(_components.li, {
        children: "เมื่อตรวจสอบค่ากำลังส่งกลับมาปกติแล้วให้ทำการไปเปิด AGC ให้ ON ตามเดิม โดยการเข้าหน้า Exciter >> ทำการลาก AGC ลงมา >> Automatic Gain Control >> AGC แล้วทำการติ๊กเครื่องหมาย √ ที่ Enable"
      }), "\n", createVNode(_components.li, {
        children: ["ทำการตรวจสอบกำลังส่งหลังจาก ON AGC อีกครั้ง ถ้าค่าปกติตามเดิม ถือเป็นการแก้ไขที่เสร็จเรียบร้อย", createVNode(_components.img, {
          src: "https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/ca5f78812a7475ffff47da7ac919a218eb11291c-1390x1031.jpg",
          alt: ""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/9213f4a0fa72f40d400e902475125e538c4b97ee-1479x1109.jpg",
        alt: ""
      })
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

const url = "src/content/blog/astro%20copy%202.mdx";
const file = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/content/blog/astro copy 2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/content/blog/astro copy 2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=astro copy 2_22RY5mQt.mjs.map
