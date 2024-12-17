var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M149.1,132.85a6,6,0,0,1,.27,5.83l-16,32a6,6,0,1,1-10.74-5.36L134.29,142H112a6,6,0,0,1-5.37-8.68l16-32a6,6,0,0,1,10.74,5.36L121.71,130H144A6,6,0,0,1,149.1,132.85ZM96,14h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12ZM198,56V224a22,22,0,0,1-22,22H80a22,22,0,0,1-22-22V56A22,22,0,0,1,80,34h96A22,22,0,0,1,198,56Zm-12,0a10,10,0,0,0-10-10H80A10,10,0,0,0,70,56V224a10,10,0,0,0,10,10h96a10,10,0,0,0,10-10Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
