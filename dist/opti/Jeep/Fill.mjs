var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && A(a, e, t[e]);
  if (l)
    for (var e of l(t))
      o.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ H.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M248,103.47A8.17,8.17,0,0,0,239.73,96H232a8,8,0,0,0-.18-1.68L221.18,44.65A16.08,16.08,0,0,0,205.53,32H50.47A16.08,16.08,0,0,0,34.82,44.65L24.18,94.32A8,8,0,0,0,24,96H16.27A8.17,8.17,0,0,0,8,103.47,8,8,0,0,0,16,112h8v88a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h20a4,4,0,0,0,4-4V128.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v52a4,4,0,0,0,4,4h8a4,4,0,0,0,4-4V128.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v52a4,4,0,0,0,4,4h20v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V112h8A8,8,0,0,0,248,103.47ZM68,144a12,12,0,1,1,12-12A12,12,0,0,1,68,144Zm120,0a12,12,0,1,1,12-12A12,12,0,0,1,188,144ZM40.18,96,50.47,48H205.53l10.29,48Z" }));
});
v.displayName = "Fill";
export {
  v as Fill
};
