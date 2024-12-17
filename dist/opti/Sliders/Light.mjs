var s = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M62,106.6V40a6,6,0,0,0-12,0v66.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V165.4a30,30,0,0,0,0-58.8ZM56,154a18,18,0,1,1,18-18A18,18,0,0,1,56,154Zm78-95.4V40a6,6,0,0,0-12,0V58.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V117.4a30,30,0,0,0,0-58.8ZM128,106a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm102,62a30.05,30.05,0,0,0-24-29.4V40a6,6,0,0,0-12,0v98.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V197.4A30.05,30.05,0,0,0,230,168Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,200,186Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
