var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M224,124H32a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V144A20,20,0,0,0,224,124ZM36,148H76v24H36Zm184,24H100V148H220ZM201.67,55.89c7.53-12.71,7.12-19.63,5.07-21.1A12,12,0,0,1,216.67,13a25.9,25.9,0,0,1,13.8,15.79c3.6,10.92.86,24.17-8.14,39.38-7.53,12.7-7.12,19.63-5.07,21.1a12,12,0,0,1-9.93,21.84,26,26,0,0,1-13.8-15.79C189.93,84.34,192.67,71.09,201.67,55.89Zm-48,0c7.53-12.71,7.12-19.63,5.07-21.1A12,12,0,0,1,168.67,13a25.9,25.9,0,0,1,13.8,15.79c3.6,10.92.86,24.17-8.14,39.38-7.53,12.7-7.12,19.63-5.07,21.1a12,12,0,0,1-9.93,21.84,26,26,0,0,1-13.8-15.79C141.93,84.34,144.67,71.09,153.67,55.89Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
