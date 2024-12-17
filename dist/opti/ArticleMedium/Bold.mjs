var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    l.call(m, e) && r(a, e, m[e]);
  if (H)
    for (var e of H(m))
      h.call(m, e) && r(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, m = d(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, p({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M56,132a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24h4V68H24a12,12,0,0,1,0-24H40a12,12,0,0,1,10,5.33l30,45,30-45A12,12,0,0,1,120,44h16a12,12,0,0,1,0,24h-4v52h4a12,12,0,0,1,0,24H116a12,12,0,0,1-8-20.93V95.63l-18,27a12,12,0,0,1-20,0l-18-27v27.44A12,12,0,0,1,56,132Zm120-28h56a12,12,0,0,0,0-24H176a12,12,0,0,0,0,24Zm56,16H176a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
