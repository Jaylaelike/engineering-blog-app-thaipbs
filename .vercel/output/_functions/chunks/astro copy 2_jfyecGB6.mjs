;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1499144c-4989-4f63-9a8a-0ee1ff611c6e",e._sentryDebugIdIdentifier="sentry-dbid-1499144c-4989-4f63-9a8a-0ee1ff611c6e")}catch(e){}}();const id = "astro copy 2.mdx";
						const collection = "blog";
						const slug = "astro-copy-2";
						const body = "\n## การแก้ไขปัญหาเครื่องส่ง NEC สถานีระนองออกอากาศ ได้ไม่เต็ม 100%\n\nอาการเสีย\n\n> เครื่องส่ง NEC ของ MUX มีปัญหาออกอากาศด้วย Power output ได้ไม่ถึง 100%\n\n![](https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/a20649457e237d5daa2a04dfe96a75fa9dfd2a28-1434x899.jpg)\n\n### ขั้นตอนการตรวจสอบ\n\n1. ทำการ ON เครื่องส่ง MUX ที่มีปัญหาลง Dummy\n2. ทำการปิดการใช้งาน AGC พบว่าค่า Power ก่อนและหลังปิดไม่มีการเปลี่ยนแปลง\n3. ทำการวัด Power ที่เครื่องส่งออกอากาศ ทำการตรวจสอบว่า Power ที่ออก 80% ที่แสดงหน้า Txcontrol ออก 80% จรึงหรือไม่\n4. ทำการตรวจสอบและเปรียบเทียบค่าพารามิเตอร์ของ PA ตอนทำงานปกติกับตอนมีปัญหา ว่า PA ทำงานได้ปกติทั้งสองตัว กำลังส่งและกระแสมีความผิดปกติหรือไม่\n\n> จากการตรวจสอบในครั้งนี้ ใช้ Power Meter วัด Power ที่ออกหลังของเครื่องส่ง ทำการวัดได้ P = 472.481 W ซึ่งใกล้เคียงกับค่าที่แสดงที่ Txcontrol Output 80% = 466w และ ทำการเปรียบเทียบพารามิเตอร์ของ PA พบว่าค่า Power ตกทั้งสองตัว หลังการเปรียบเทียบค่าพารามิเตอร์ก่อนมีปัญหาและตอนมีปัญหา ค่ากระแส DPA เท่าเดิม ส่วนค่า FPA มีการกินกระแสที่ลดลงทั้ง 2 PA\n\n![](https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/dccd1464e23e981b34ee049c3552e9076b52d525-1479x1109.jpg)\n\n![](https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/c7077be4f3409f012156ab1a1e2b128dfe89f6d7-1278x649.jpg)\n\n### วิธีการแก้ไข\n\n1. ทำการปิด AGC ที่ Exciter ของเครื่อง Mux โดยการ เข้าหน้า Exciter >> ทำการลาก AGC ลงมา >> Automatic Gain Control >> AGC แล้วทำการเอาเครื่องหมาย √ ที่ Enable ออก![](https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/ece47295ca876d461c5850694bfa09c351b1c7cd-1007x772.png)\n2. ทำการปรับเพิ่ม Power ของเครื่องส่ง เข้าหน้า Exciter >> ลาก RF Output ลงมา >> Settings >> Level โดยจะทำการปรับเพิ่มค่า Level เมื่อปรับเพิ่มค่า Level กำลังส่งของเครื่องส่งจะเพิ่มขึ้นด้วย โดยจะปรับเพิ่มทีละ 0.1 dBm แล้วทำการวัด Power ที่ออกจริงด้วย Power meter โดยปรับจนกำลังส่งออกได้ตามที่ต้องการ![](https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/70cd262ab0d29501cde00bc12359ed3f1c79e4a4-1002x768.png)\n3. เมื่อปรับกำลังส่งได้แล้ว ให้รอไว้สักแปปค่า Power จะเพิ่มขึ้นเอง ให้เราเราทำการปรับค่า Level ให้ลดลง ค่า Power ก็จะลดลงเรื่อยๆ ปรับลดลงจนค่ากลับมาเท่าเดิม (ค่า Level ที่ก่อนการปรับเพิ่มขึ้น) ค่ากำลังส่งจะกลับมาปกติ\n4. เมื่อตรวจสอบค่ากำลังส่งกลับมาปกติแล้วให้ทำการไปเปิด AGC ให้ ON ตามเดิม โดยการเข้าหน้า Exciter >> ทำการลาก AGC ลงมา >> Automatic Gain Control >> AGC แล้วทำการติ๊กเครื่องหมาย √ ที่ Enable\n5. ทำการตรวจสอบกำลังส่งหลังจาก ON AGC อีกครั้ง ถ้าค่าปกติตามเดิม ถือเป็นการแก้ไขที่เสร็จเรียบร้อย![](https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/ca5f78812a7475ffff47da7ac919a218eb11291c-1390x1031.jpg)\n\n![](https://raw.githubusercontent.com/Jaylaelike/blog-template/main/src/assets/images/9213f4a0fa72f40d400e902475125e538c4b97ee-1479x1109.jpg)\n";
						const data = {title:"การแก้ไขปัญหาเครื่องส่ง NEC สถานีระนองออกอากาศ ได้ไม่เต็ม 100%",description:"การแก้ไขปัญหาเครื่องส่ง NEC สถานีระนองออกอากาศ ได้ไม่เต็ม 100%",pubDate:new Date(1656712800000),heroImage:
						new Proxy({"src":"/_astro/ade72a0adffd77a1dead3fa9724ba57f45ceaa0e-1479x1109.BOtYM1bu.jpg","width":1479,"height":1109,"format":"jpg","fsPath":"/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/assets/images/ade72a0adffd77a1dead3fa9724ba57f45ceaa0e-1479x1109.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/assets/images/ade72a0adffd77a1dead3fa9724ba57f45ceaa0e-1479x1109.jpg";
							}
							
							return target[name];
						}
					})
					,category:"Transmitter",tags:["ชุมพร","ระนอง","การแก้ไขปัญหา","เครื่องส่ง"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/sittichaimarkwisai/Desktop/blog-engineer-app/src/content/blog/astro copy 2.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
//# sourceMappingURL=astro copy 2_jfyecGB6.mjs.map
