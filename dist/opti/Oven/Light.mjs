var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var H = m, { children: a } = H, t = A(H, ["children"]);
  return /* @__PURE__ */ V.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM74,76A10,10,0,1,1,84,86,10,10,0,0,1,74,76Zm44,0a10,10,0,1,1,10,10A10,10,0,0,1,118,76Zm44,0a10,10,0,1,1,10,10A10,10,0,0,1,162,76Zm22,30H72a6,6,0,0,0-6,6v72a6,6,0,0,0,6,6H184a6,6,0,0,0,6-6V112A6,6,0,0,0,184,106Zm-6,72H78V118H178Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
