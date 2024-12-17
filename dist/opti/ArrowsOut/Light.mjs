var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((r, e) => {
  var m = r, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ h.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M214,48V96a6,6,0,0,1-12,0V62.48l-45.76,45.76a6,6,0,0,1-8.48-8.48L193.52,54H160a6,6,0,0,1,0-12h48A6,6,0,0,1,214,48ZM99.76,147.76,54,193.52V160a6,6,0,0,0-12,0v48a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12H62.48l45.76-45.76a6,6,0,0,0-8.48-8.48ZM208,154a6,6,0,0,0-6,6v33.52l-45.76-45.76a6,6,0,0,0-8.48,8.48L193.52,202H160a6,6,0,0,0,0,12h48a6,6,0,0,0,6-6V160A6,6,0,0,0,208,154ZM62.48,54H96a6,6,0,0,0,0-12H48a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l45.76,45.76a6,6,0,0,0,8.48-8.48Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
