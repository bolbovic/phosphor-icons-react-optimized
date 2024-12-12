var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M67.79,62.74a4,4,0,0,0-7.58,0l-40,120A4,4,0,0,0,24,188h80a4,4,0,0,0,3.79-5.26ZM29.55,180,64,76.65,98.45,180ZM204,76a48,48,0,1,0-48,48A48.05,48.05,0,0,0,204,76Zm-88,0a40,40,0,1,1,40,40A40,40,0,0,1,116,76Zm108,72H136a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4h88a4,4,0,0,0,4-4V152A4,4,0,0,0,224,148Zm-4,56H140V156h80Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
