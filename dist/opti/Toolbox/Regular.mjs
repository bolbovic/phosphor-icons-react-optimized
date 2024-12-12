var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, v, e) => v in a ? f(a, v, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[v] = e, l = (a, v) => {
  for (var e in v || (v = {}))
    o.call(v, e) && m(a, e, v[e]);
  if (t)
    for (var e of t(v))
      p.call(v, e) && m(a, e, v[e]);
  return a;
};
var V = (a, v) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && v.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      v.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((r, e) => {
  var H = r, { children: a } = H, v = V(H, ["children"]);
  return /* @__PURE__ */ c.createElement(i, l({ ref: e }, v), a, /* @__PURE__ */ c.createElement("path", { d: "M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM224,80v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32V80Zm0,112H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
