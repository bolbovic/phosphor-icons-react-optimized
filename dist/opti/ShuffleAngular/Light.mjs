var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var L in a)
    o.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && m)
    for (var L of m(a))
      t.indexOf(L) < 0 && i.call(a, L) && (e[L] = a[L]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((L, e) => {
  var r = L, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ h.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M236.24,179.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L217.52,190H168a6,6,0,0,1-4.88-2.51L84.91,78H32a6,6,0,0,1,0-12H88a6,6,0,0,1,4.88,2.51L171.09,178h46.43l-13.76-13.76a6,6,0,0,1,8.48-8.48Zm-92.07-74.4a6,6,0,0,0,8.37-1.4l18.55-26h46.43L203.76,91.76a6,6,0,1,0,8.48,8.48l24-24a6,6,0,0,0,0-8.48l-24-24a6,6,0,0,0-8.48,8.48L217.52,66H168a6,6,0,0,0-4.88,2.51L142.78,97A6,6,0,0,0,144.17,105.36Zm-32.34,45.28a6,6,0,0,0-8.37,1.4L84.91,178H32a6,6,0,0,0,0,12H88a6,6,0,0,0,4.88-2.51L113.22,159A6,6,0,0,0,111.83,150.64Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
