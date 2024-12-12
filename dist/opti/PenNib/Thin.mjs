var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    L.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var l = r, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M244,92.68a11.93,11.93,0,0,0-3.51-8.48L171.8,15.51a12,12,0,0,0-17,0L125.78,44.56,66.92,66.63a12.06,12.06,0,0,0-7.63,9.26L36.05,215.34A4,4,0,0,0,40,220a4.89,4.89,0,0,0,.66-.05L180.1,196.7a12,12,0,0,0,9.27-7.62l22.07-58.86,29-29A11.92,11.92,0,0,0,244,92.68Zm-62.12,93.59a4,4,0,0,1-3.09,2.54L51.66,210l58.45-58.45a24,24,0,1,0-5.66-5.66L46,204.35,67.19,77.21a4,4,0,0,1,2.54-3.09L127,52.64,203.35,129ZM108,132a16,16,0,1,1,16,16A16,16,0,0,1,108,132ZM234.83,95.51,208,122.34,133.66,48l26.82-26.82a4,4,0,0,1,5.66,0l68.69,68.69a4,4,0,0,1,0,5.65Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
