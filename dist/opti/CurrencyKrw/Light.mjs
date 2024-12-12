var c = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (L)
    for (var e of L(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && L)
    for (var r of L(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ h.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M240,130H214.91l22.65-55.74a6,6,0,0,0-11.12-4.52L202,130H158L133.56,69.74a6,6,0,0,0-11.12,0L98,130H54L29.56,69.74a6,6,0,1,0-11.12,4.52L41.09,130H16a6,6,0,0,0,0,12H46l24.48,60.26a6,6,0,0,0,11.12,0L106,142H150l24.48,60.26a6,6,0,0,0,11.12,0L210,142h30a6,6,0,0,0,0-12ZM76,184.06,58.91,142H93.09ZM110.91,130,128,87.94,145.09,130ZM180,184.06,162.91,142h34.18Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
