var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((m, e) => {
  var o = m, { children: a } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ H.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M236,48V88a12,12,0,0,1-24,0V60H184a12,12,0,0,1,0-24h40A12,12,0,0,1,236,48ZM72,196H44V168a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H72a12,12,0,0,0,0-24Zm152-40a12,12,0,0,0-12,12v28H184a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,224,156ZM32,100A12,12,0,0,0,44,88V60H72a12,12,0,0,0,0-24H32A12,12,0,0,0,20,48V88A12,12,0,0,0,32,100Zm158,70.42-56,32a12,12,0,0,1-11.9,0l-56-32A12,12,0,0,1,60,160V96a12,12,0,0,1,6-10.42l56-32a12,12,0,0,1,11.9,0l56,32A12,12,0,0,1,196,96v64A12,12,0,0,1,190,170.42ZM96.19,96,128,114.18,159.81,96,128,77.82ZM84,153l32,18.28V135L84,116.68Zm88,0V116.68L140,135v36.36Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};