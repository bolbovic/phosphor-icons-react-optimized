var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      f.call(t, a) && l(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && f.call(e, r) && (a[r] = e[r]);
  return a;
};
import c, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const R = i((r, a) => {
  var o = r, { children: e } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, s({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
