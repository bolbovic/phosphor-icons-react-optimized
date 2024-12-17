var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M227.09,18.86a6,6,0,0,0-5.91-.15L102.5,82H32A14,14,0,0,0,18,96V200a14,14,0,0,0,14,14h88a14,14,0,0,0,14-14V168a6.28,6.28,0,0,0-.25-1.72L111.16,91,218,34V160a2,2,0,0,1-2,2H200a2,2,0,0,1-2-2v-8a6,6,0,0,0-12,0v8a14,14,0,0,0,14,14h16a14,14,0,0,0,14-14V24A6,6,0,0,0,227.09,18.86ZM99.54,94l20.4,68H62V94ZM32,94H50v68H30V96A2,2,0,0,1,32,94Zm88,108H32a2,2,0,0,1-2-2V174h92v26A2,2,0,0,1,120,202Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
