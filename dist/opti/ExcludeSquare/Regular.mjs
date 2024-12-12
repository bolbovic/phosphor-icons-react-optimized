var h = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, l, e) => l in a ? h(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    H.call(l, e) && Z(a, e, l[e]);
  if (t)
    for (var e of t(l))
      o.call(l, e) && Z(a, e, l[e]);
  return a;
};
var V = (a, l) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && l.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      l.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const M = s((m, e) => {
  var r = m, { children: a } = r, l = V(r, ["children"]);
  return /* @__PURE__ */ f.createElement(v, p({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M224,160V96a8,8,0,0,0-8-8H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V96h0v64a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V160Zm-60.69,48-40-40h33.38l40,40ZM48,59.31l40,40v33.38l-40-40ZM92.69,48l40,40H99.31l-40-40ZM104,152h0V104h48v48Zm64,4.69V123.31l40,40v33.38Zm40-16L171.31,104H208Zm-56-56L115.31,48H152ZM48,115.31,84.69,152H48Zm56,56L140.69,208H104Z" }));
});
M.displayName = "Regular";
export {
  M as Regular,
  M as default
};
