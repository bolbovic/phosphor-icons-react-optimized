var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && H(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((o, e) => {
  var m = o, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,96H48a20,20,0,0,0-20,20v84a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V116A20,20,0,0,0,208,96Zm-4,100H52V120H204ZM44,68A12,12,0,0,1,56,56H200a12,12,0,0,1,0,24H56A12,12,0,0,1,44,68ZM60,28A12,12,0,0,1,72,16H184a12,12,0,0,1,0,24H72A12,12,0,0,1,60,28Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
