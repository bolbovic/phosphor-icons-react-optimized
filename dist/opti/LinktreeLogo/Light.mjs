var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var L = r, { children: a } = L, t = c(L, ["children"]);
  return /* @__PURE__ */ f.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M134,160v72a6,6,0,0,1-12,0V160a6,6,0,0,1,12,0Zm74-62H142.48l45.76-45.76a6,6,0,0,0-8.48-8.48L134,89.52V24a6,6,0,0,0-12,0V89.52L76.24,43.76a6,6,0,0,0-8.48,8.48L113.52,98H48a6,6,0,0,0,0,12h65.52L67.76,155.76a6,6,0,1,0,8.48,8.48L128,112.48l51.76,51.76a6,6,0,0,0,8.48-8.48L142.48,110H208a6,6,0,0,0,0-12Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
