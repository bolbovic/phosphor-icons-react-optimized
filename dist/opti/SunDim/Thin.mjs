var c = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var l = (a, e, m) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, i = (a, e) => {
  for (var m in e || (e = {}))
    o.call(e, m) && l(a, m, e[m]);
  if (Z)
    for (var m of Z(e))
      h.call(e, m) && l(a, m, e[m]);
  return a;
};
var p = (a, e) => {
  var m = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && Z)
    for (var t of Z(a))
      e.indexOf(t) < 0 && h.call(a, t) && (m[t] = a[t]);
  return m;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, m) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: m }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M124,40V32a4,4,0,0,1,8,0v8a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-8-8a4,4,0,0,0-5.66,5.66Zm0,122.34-8,8a4,4,0,0,0,5.66,5.66l8-8a4,4,0,0,0-5.66-5.66Zm136-136-8,8a4,4,0,0,0,5.66,5.66l8-8a4,4,0,1,0-5.66-5.66Zm-2.34,136a4,4,0,0,0-5.66,5.66l8,8a4,4,0,0,0,5.66-5.66ZM40,124H32a4,4,0,0,0,0,8h8a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,128,212Zm96-88h-8a4,4,0,0,0,0,8h8a4,4,0,0,0,0-8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
