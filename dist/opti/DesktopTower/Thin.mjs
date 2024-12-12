var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && V.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M212,72a4,4,0,0,1-4,4H176a4,4,0,0,1,0-8h32A4,4,0,0,1,212,72Zm-4,28H176a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm36-52V208a12,12,0,0,1-12,12H152a12,12,0,0,1-12-12V188H92v24h20a4,4,0,0,1,0,8H64a4,4,0,0,1,0-8H84V188H32a20,20,0,0,1-20-20V96A20,20,0,0,1,32,76H140V48a12,12,0,0,1,12-12h80A12,12,0,0,1,244,48ZM140,180V84H32A12,12,0,0,0,20,96v72a12,12,0,0,0,12,12ZM236,48a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4ZM192,172a8,8,0,1,0,8,8A8,8,0,0,0,192,172Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
