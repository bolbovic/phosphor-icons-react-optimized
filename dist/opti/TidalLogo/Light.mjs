var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && L(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M252.24,91.76l-40-40a6,6,0,0,0-8.48,0L168,87.52,132.24,51.76a6,6,0,0,0-8.48,0L88,87.52,52.24,51.76a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0L88,104.48,119.52,136,83.76,171.76a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0,0-8.48L136.48,136,168,104.48l35.76,35.76a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,252.24,91.76ZM48,127.51,16.49,96,48,64.49,79.51,96Zm80,80L96.49,176,128,144.49,159.51,176Zm0-80L96.49,96,128,64.49,159.51,96Zm80,0L176.49,96,208,64.49,239.51,96Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
