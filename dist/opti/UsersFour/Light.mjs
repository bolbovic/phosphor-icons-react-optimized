var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (A)
    for (var e of A(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import M, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ M.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ M.createElement("path", { d: "M28.4,124.8a6,6,0,0,0,8.4-1.2,54,54,0,0,1,86.4,0,6,6,0,0,0,8.4,1.19,5.59,5.59,0,0,0,1.19-1.19h0a54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.21,65.74,65.74,0,0,0-29.69-22.26,38,38,0,1,0-46.22,0A65.32,65.32,0,0,0,128,110.7a65.32,65.32,0,0,0-24.89-16.57,38,38,0,1,0-46.22,0A65.69,65.69,0,0,0,27.2,116.4,6,6,0,0,0,28.4,124.8ZM176,38a26,26,0,1,1-26,26A26,26,0,0,1,176,38ZM80,38A26,26,0,1,1,54,64,26,26,0,0,1,80,38ZM199.11,198.13a38,38,0,1,0-46.22,0A65.32,65.32,0,0,0,128,214.7a65.32,65.32,0,0,0-24.89-16.57,38,38,0,1,0-46.22,0A65.69,65.69,0,0,0,27.2,220.4a6,6,0,1,0,9.6,7.2,54,54,0,0,1,86.4,0,6,6,0,0,0,8.4,1.19,5.59,5.59,0,0,0,1.19-1.19h0a54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.21A65.74,65.74,0,0,0,199.11,198.13ZM80,142a26,26,0,1,1-26,26A26,26,0,0,1,80,142Zm96,0a26,26,0,1,1-26,26A26,26,0,0,1,176,142Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
