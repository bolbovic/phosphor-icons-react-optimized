var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M176,76a28,28,0,1,0-28-28A28,28,0,0,0,176,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,176,28ZM164,168a60,60,0,1,1-60-60,4,4,0,0,1,0,8,52,52,0,1,0,52,52,4,4,0,0,1,8,0Zm39.09-34.54a4,4,0,0,1,.83,3.32l-16,80A4,4,0,0,1,184,220a3.44,3.44,0,0,1-.78-.08,4,4,0,0,1-3.14-4.7l15-75.22H128a4,4,0,0,1-3.47-6l22.08-38.42a84.05,84.05,0,0,0-96.06,7.61A4,4,0,0,1,45.45,97a92,92,0,0,1,108.73-6.15,4,4,0,0,1,1.29,5.34L134.91,132H200A4,4,0,0,1,203.09,133.46Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
