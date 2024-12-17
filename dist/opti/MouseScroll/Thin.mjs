var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(V, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,156a52.06,52.06,0,0,1-52,52H112a52.06,52.06,0,0,1-52-52V80a52.06,52.06,0,0,1,52-52h32a52.06,52.06,0,0,1,52,52ZM132,73.66V182.34l17.17-17.17a4,4,0,0,1,5.66,5.66l-24,24a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L124,182.34V73.66L106.83,90.83a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0l24,24a4,4,0,0,1-5.66,5.66Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
