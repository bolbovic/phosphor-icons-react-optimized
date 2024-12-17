var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = n((l, e) => {
  var m = l, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM101.66,162.34a8,8,0,0,1-11.32,11.32l-40-40a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,11.32L67.31,128Zm104-28.68-40,40a8,8,0,0,1-11.32-11.32L188.69,128,154.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,205.66,133.66Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
