var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M208,52a91.68,91.68,0,0,0-29.9,5c-15.39-28.76-43.4-43.06-44.73-43.72a12,12,0,0,0-10.74,0c-1.33.66-29.34,15-44.74,43.72A91.57,91.57,0,0,0,48,52,12,12,0,0,0,36,64v80a92,92,0,0,0,184,0V64A12,12,0,0,0,208,52ZM60,77.06a68.15,68.15,0,0,1,55.72,60.73,91.89,91.89,0,0,0-55.72-29Zm56,133.88A68.12,68.12,0,0,1,60,144V133.06A68.12,68.12,0,0,1,116,200ZM99.37,67.71c8.2-14.94,21.32-25,28.63-29.77,7.32,4.79,20.43,14.83,28.63,29.77A92.69,92.69,0,0,0,128,98.61,92.8,92.8,0,0,0,99.37,67.71ZM196,144a68.12,68.12,0,0,1-56,66.94V200a68.12,68.12,0,0,1,56-66.94Zm0-35.22a91.89,91.89,0,0,0-55.72,29A68.15,68.15,0,0,1,196,77.06Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};