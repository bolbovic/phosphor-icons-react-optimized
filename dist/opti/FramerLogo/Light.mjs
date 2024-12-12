var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ L.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M206,104V40a6,6,0,0,0-6-6H56a6,6,0,0,0-4,10.48L112.22,98H56a6,6,0,0,0-6,6v64a6,6,0,0,0,1.76,4.24l72,72A6,6,0,0,0,134,240V174h66a6,6,0,0,0,4-10.48L143.78,110H200A6,6,0,0,0,206,104Zm-21.78,58H128a6,6,0,0,0-6,6v57.51l-60-60V110h63.72ZM194,98H130.28L71.78,46H194Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
