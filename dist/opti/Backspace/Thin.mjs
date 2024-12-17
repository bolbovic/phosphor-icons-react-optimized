var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(H, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,44H68.53a12.06,12.06,0,0,0-10.29,5.83L12.57,125.94a4,4,0,0,0,0,4.12l45.67,76.11A12.06,12.06,0,0,0,68.53,212H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H68.53a4,4,0,0,1-3.43-1.94L20.67,128,65.1,53.94A4,4,0,0,1,68.53,52H216a4,4,0,0,1,4,4Zm-57.17-93.17L141.66,128l21.17,21.17a4,4,0,0,1-5.66,5.66L136,133.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L130.34,128l-21.17-21.17a4,4,0,0,1,5.66-5.66L136,122.34l21.17-21.17a4,4,0,1,1,5.66,5.66Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
