var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,114a30,30,0,0,0-29.21,23.19l-44-6.28a10,10,0,0,1-6.18-3.39L91.18,83.83A30,30,0,1,0,74,85.4v85.2a30,30,0,1,0,12,0V96.22l33.52,39.11a22,22,0,0,0,13.6,7.46l45.35,6.48A30,30,0,1,0,208,114ZM62,56A18,18,0,1,1,80,74,18,18,0,0,1,62,56ZM98,200a18,18,0,1,1-18-18A18,18,0,0,1,98,200Zm110-38a18,18,0,1,1,18-18A18,18,0,0,1,208,162Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
