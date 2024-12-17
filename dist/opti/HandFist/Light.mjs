var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M200,82H182V64a30,30,0,0,0-54-18A30,30,0,0,0,74,64v0A30,30,0,0,0,26,88v40a102,102,0,0,0,204,0V112A30,30,0,0,0,200,82ZM152,46a18,18,0,0,1,18,18V82H136a14.71,14.71,0,0,0-2,.16V64A18,18,0,0,1,152,46ZM86,64a18,18,0,0,1,36,0v40a18,18,0,0,1-36,0ZM38,88a18,18,0,0,1,36,0v16a18,18,0,0,1-36,0Zm180,40a90,90,0,0,1-180,0h0a30,30,0,0,0,42-6,30,30,0,0,0,45.12,3.3A30.18,30.18,0,0,0,140,139.51,45.92,45.92,0,0,0,122,176a6,6,0,0,0,12,0,34,34,0,0,1,34-34,6,6,0,0,0,0-12H152a18,18,0,0,1-18-18V96a2,2,0,0,1,2-2h64a18,18,0,0,1,18,18Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
