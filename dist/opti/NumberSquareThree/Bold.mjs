var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var H = (a, t) => {
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
const n = i((o, e) => {
  var m = o, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM92,80a12,12,0,0,1,12-12h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,1,1,95.43,176a12,12,0,1,1,17.14-16.79A16,16,0,1,0,124,132a12,12,0,0,1-9.83-18.88L129,92H104A12,12,0,0,1,92,80Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
