var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? v(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      o.call(m, e) && Z(a, e, m[e]);
  return a;
};
var V = (a, m) => {
  var e = {};
  for (var l in a)
    H.call(a, l) && m.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      m.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((l, e) => {
  var t = l, { children: a } = t, m = V(t, ["children"]);
  return /* @__PURE__ */ h.createElement(c, p({ ref: e }, m), a, /* @__PURE__ */ h.createElement("path", { d: "M224,160V96a8,8,0,0,0-8-8H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V96h0v64a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V160Zm-60.69,48-40-40h33.38l40,40ZM48,59.31l40,40v33.38l-40-40ZM92.69,48l40,40H99.31l-40-40ZM104,152h0V104h48v48Zm64,4.69V123.31l40,40v33.38Zm40-16L171.31,104H208Zm-56-56L115.31,48H152ZM48,115.31,84.69,152H48Zm56,56L140.69,208H104Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
