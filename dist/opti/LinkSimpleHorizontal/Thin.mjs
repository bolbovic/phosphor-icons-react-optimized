var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
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
const l = s((m, e) => {
  var h = m, { children: a } = h, t = H(h, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M80,124h96a4,4,0,0,1,0,8H80a4,4,0,0,1,0-8Zm24,48H64a44,44,0,0,1,0-88h40a4,4,0,0,0,0-8H64a52,52,0,0,0,0,104h40a4,4,0,0,0,0-8Zm88-96H152a4,4,0,0,0,0,8h40a44,44,0,0,1,0,88H152a4,4,0,0,0,0,8h40a52,52,0,0,0,0-104Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
