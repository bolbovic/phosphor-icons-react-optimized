var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((m, e) => {
  var A = m, { children: a } = A, t = l(A, ["children"]);
  return /* @__PURE__ */ n.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M192,20H104A12,12,0,0,0,92,32v78.34L52.08,150.26a54.91,54.91,0,0,0,77.66,77.66l68.4-68.41A19.85,19.85,0,0,0,204,145.37V32A12,12,0,0,0,192,20Zm-88,8h88a4,4,0,0,1,4,4V52H100V32A4,4,0,0,1,104,28Zm20.08,194.26a46.91,46.91,0,1,1-66.34-66.34l41.09-41.09A4,4,0,0,0,100,112V60h96v48.17A52.05,52.05,0,0,0,148,160a51.44,51.44,0,0,0,9,29.3Zm68.4-68.4-29.66,29.67A43.5,43.5,0,0,1,156,160a44.06,44.06,0,0,1,40-43.81v29.18A11.92,11.92,0,0,1,192.48,153.86Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
