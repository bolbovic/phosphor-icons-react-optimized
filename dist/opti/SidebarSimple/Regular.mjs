var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, f = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      H.call(t, a) && l(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && H.call(e, r) && (a[r] = e[r]);
  return a;
};
import V, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((r, a) => {
  var o = r, { children: e } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ V.createElement(i, f({ ref: a }, t), e, /* @__PURE__ */ V.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H80V200H40ZM216,200H96V56H216V200Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
