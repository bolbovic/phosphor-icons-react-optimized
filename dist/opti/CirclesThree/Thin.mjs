var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      A.call(m, e) && i(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var o = t, { children: a } = o, m = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, Z({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M168,76a40,40,0,1,0-40,40A40,40,0,0,0,168,76Zm-40,32a32,32,0,1,1,32-32A32,32,0,0,1,128,108Zm60,24a40,40,0,1,0,40,40A40,40,0,0,0,188,132Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,188,204ZM68,132a40,40,0,1,0,40,40A40,40,0,0,0,68,132Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,68,204Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
