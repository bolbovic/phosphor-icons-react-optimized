var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M78,224a6,6,0,0,1-6,6H56a14,14,0,0,1-14-14V184a6,6,0,0,1,12,0v32a2,2,0,0,0,2,2H72A6,6,0,0,1,78,224ZM214,88v48a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H120a6,6,0,0,1,0-12h32a6,6,0,0,1,4.24,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.51L158,46.49ZM80,26H56A14,14,0,0,0,42,40V64a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2H80a6,6,0,0,0,0-12ZM208,170a6,6,0,0,0-6,6v40a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14V176A6,6,0,0,0,208,170ZM48,150a6,6,0,0,0,6-6V104a6,6,0,0,0-12,0v40A6,6,0,0,0,48,150Zm104,68H112a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
