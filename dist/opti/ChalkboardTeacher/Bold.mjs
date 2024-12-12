var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M56,84A12,12,0,0,1,68,72H188a12,12,0,0,1,12,12v88a12,12,0,0,1-24,0V96H68A12,12,0,0,1,56,84ZM236,56V200a20,20,0,0,1-20,20H149.26a12,12,0,0,1-11.4-8.26,36,36,0,0,0-67.74,0A12,12,0,0,1,58.74,220H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM104,164a16,16,0,1,0-16-16A16,16,0,0,0,104,164ZM212,60H44V196h6.92a60.18,60.18,0,0,1,21.76-23.16,40,40,0,1,1,62.64,0A60.18,60.18,0,0,1,157.08,196H212Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
