var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && L(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var m = l, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M241.9,82.79,189.21,30.1a14,14,0,0,0-19.79,0L62.1,137.42a14,14,0,0,0,0,19.79l22.1,22.1L35.76,227.76a6,6,0,1,0,8.48,8.48L92.69,187.8l22.1,22.1a14,14,0,0,0,19.79,0L241.9,102.58a14,14,0,0,0,0-19.79ZM126.1,201.42a2,2,0,0,1-2.83,0l-22.1-22.11,31.07-31.07a6,6,0,0,0-8.48-8.48L92.69,170.83l-22.11-22.1a2,2,0,0,1,0-2.83l35.9-35.9H162v55.52ZM233.42,94.1,174,153.52V104a6,6,0,0,0-6-6H118.48L177.9,38.58a2,2,0,0,1,2.83,0l52.69,52.69A2,2,0,0,1,233.42,94.1ZM60,86A26,26,0,1,0,34,60,26,26,0,0,0,60,86Zm0-40A14,14,0,1,1,46,60,14,14,0,0,1,60,46Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
