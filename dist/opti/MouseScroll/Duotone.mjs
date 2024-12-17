var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((o, e) => {
  var m = o, { children: a } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ l.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M200,80v96a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V80a56,56,0,0,1,56-56h32A56,56,0,0,1,200,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,83.31v89.38l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,172.69V83.31L109.66,93.66A8,8,0,0,1,98.34,82.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
