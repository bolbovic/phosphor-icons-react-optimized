var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
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
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm67.79,162.13-34-34a43.92,43.92,0,0,0,0-56.28l34-34a91.83,91.83,0,0,1,0,124.26ZM92,128a36,36,0,1,1,36,36A36,36,0,0,1,92,128Zm98.13-67.79-34,34a43.92,43.92,0,0,0-56.28,0l-34-34a91.83,91.83,0,0,1,124.26,0ZM60.21,65.87l34,34a43.92,43.92,0,0,0,0,56.28l-34,34a91.83,91.83,0,0,1,0-124.26Zm5.66,129.92,34-34a43.92,43.92,0,0,0,56.28,0l34,34a91.83,91.83,0,0,1-124.26,0Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
