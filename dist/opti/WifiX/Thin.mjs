var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M136,204a8,8,0,1,1-8-8A8,8,0,0,1,136,204ZM205.66,80l21.17-21.17a4,4,0,1,0-5.66-5.66L200,74.34,178.83,53.17a4,4,0,0,0-5.66,5.66L194.34,80l-21.17,21.17a4,4,0,0,0,5.66,5.66L200,85.66l21.17,21.17a4,4,0,1,0,5.66-5.66Zm-35.31,81.77a72,72,0,0,0-84.71,0,4,4,0,0,0,4.71,6.46,64.05,64.05,0,0,1,75.29,0,4,4,0,1,0,4.71-6.46ZM135.81,60.19a4,4,0,1,0,.38-8c-2.71-.13-5.47-.2-8.19-.2A168.33,168.33,0,0,0,21.46,90.09a4,4,0,1,0,5.08,6.19A160.22,160.22,0,0,1,128,60C130.59,60,133.22,60.06,135.81,60.19Zm-.08,48.07a4,4,0,1,0,.54-8c-2.74-.19-5.52-.28-8.27-.28a118.72,118.72,0,0,0-74.48,25.91,4,4,0,0,0,5,6.27A110.84,110.84,0,0,1,128,108C130.57,108,133.17,108.09,135.73,108.26Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
