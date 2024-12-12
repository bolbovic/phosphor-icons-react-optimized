var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M236.85,134a64,64,0,0,0-87.43-42.11l14.22-56.77a12,12,0,0,0-5.17-13A64,64,0,0,0,86,127.52L29.72,143.59a12,12,0,0,0-8.69,11,64,64,0,0,0,127.56,10l42,40.7a12,12,0,0,0,13.86,2A64,64,0,0,0,236.85,134ZM116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm8-92a40,40,0,0,1,14,2.53L124.6,92.17a36,36,0,0,0-25.85,14.88A40,40,0,0,1,124,36ZM105,192.1A40,40,0,0,1,45.5,164l53.18-15.19a36,36,0,0,0,25.8,15A39.84,39.84,0,0,1,105,192.1Zm104.7-21.56a39.92,39.92,0,0,1-9.21,10.89L160.73,143a35.9,35.9,0,0,0,.05-29.83,40,40,0,0,1,48.89,57.4Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
