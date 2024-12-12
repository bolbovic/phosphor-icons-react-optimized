var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var V = m, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ v.createElement(c, l({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M85.65,154l-20,56a6,6,0,0,1-11.3,0l-20-56a6,6,0,1,1,11.3-4L60,190.16,74.35,150a6,6,0,0,1,11.3,4ZM208,158a6,6,0,0,0,0-12H176a6,6,0,0,0-6,6v56a6,6,0,0,0,6,6h32a6,6,0,0,0,0-12H182V186h18a6,6,0,0,0,0-12H182V158Zm-64-12a6,6,0,0,0-6,6v38a12,12,0,0,1-24,0V152a6,6,0,0,0-12,0v38a24,24,0,0,0,48,0V152A6,6,0,0,0,144,146Zm70-58v24a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-20.48-6L158,46.48V82Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
