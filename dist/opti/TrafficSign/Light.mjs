var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var L in a)
    h.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && m)
    for (var L of m(a))
      t.indexOf(L) < 0 && i.call(a, L) && (e[L] = a[L]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((L, e) => {
  var r = L, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M241.74,117.71,138.29,14.26a14.56,14.56,0,0,0-20.58,0L14.26,117.71a14.56,14.56,0,0,0,0,20.58L117.71,241.74h0a14.56,14.56,0,0,0,20.58,0L241.74,138.29a14.56,14.56,0,0,0,0-20.58Zm-8.49,12.1L129.81,233.25a2.56,2.56,0,0,1-3.62,0h0L22.75,129.81a2.56,2.56,0,0,1,0-3.62L126.19,22.75a2.56,2.56,0,0,1,3.62,0L233.25,126.19a2.56,2.56,0,0,1,0,3.62Zm-61-14a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L153.51,126H112a18,18,0,0,0-18,18v8a6,6,0,0,1-12,0v-8a30,30,0,0,1,30-30h41.51l-13.75-13.76a6,6,0,0,1,8.48-8.48Z" }));
});
n.displayName = "Light";
export {
  n as Light
};