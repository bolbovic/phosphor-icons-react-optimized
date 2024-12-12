var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, M = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ f.createElement(H, M({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M172.53,49.06a251.42,251.42,0,0,0-41.09-38,6,6,0,0,0-6.88,0,251.42,251.42,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM188.88,186H67.12a74.05,74.05,0,0,1-9.78-20H198.66A74.05,74.05,0,0,1,188.88,186ZM54.69,154A75,75,0,0,1,54,144a92.09,92.09,0,0,1,.56-10H201.44a92.09,92.09,0,0,1,.56,10,75,75,0,0,1-.69,10ZM128,23.49c13.13,10.12,59.83,49.06,71.39,98.51H56.61C68.17,72.55,114.87,33.61,128,23.49ZM77.48,198h101a73.81,73.81,0,0,1-101,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
