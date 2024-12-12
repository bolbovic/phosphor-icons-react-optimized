var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as f } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M132,72v49.53l42.21-21.11a4,4,0,1,1,3.58,7.16l-48,24A4.05,4.05,0,0,1,128,132a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0Zm-4,148a92,92,0,1,1,92-92,4,4,0,0,0,8,0A100,100,0,1,0,128,228a4,4,0,0,0,0-8Zm99.86,3a4,4,0,1,1-7.73,2.05c-3.29-12.37-14.86-21-28.13-21s-24.84,8.65-28.14,21a4,4,0,0,1-3.86,3,3.7,3.7,0,0,1-1-.14,4,4,0,0,1-2.84-4.89A36.24,36.24,0,0,1,176.5,199.3a28,28,0,1,1,31,0A36.2,36.2,0,0,1,227.86,223ZM192,196a20,20,0,1,0-20-20A20,20,0,0,0,192,196Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
