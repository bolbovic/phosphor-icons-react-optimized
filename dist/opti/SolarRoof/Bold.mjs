var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (l, a, e) => a in l ? c(l, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[a] = e, p = (l, a) => {
  for (var e in a || (a = {}))
    Z.call(a, e) && r(l, e, a[e]);
  if (t)
    for (var e of t(a))
      H.call(a, e) && r(l, e, a[e]);
  return l;
};
var d = (l, a) => {
  var e = {};
  for (var m in l)
    Z.call(l, m) && a.indexOf(m) < 0 && (e[m] = l[m]);
  if (l != null && t)
    for (var m of t(l))
      a.indexOf(m) < 0 && H.call(l, m) && (e[m] = l[m]);
  return e;
};
import h, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: l } = o, a = d(o, ["children"]);
  return /* @__PURE__ */ h.createElement(i, p({ ref: e }, a), l, /* @__PURE__ */ h.createElement("path", { d: "M250.73,122.63l-40-80A12,12,0,0,0,200,36H56a12,12,0,0,0-10.73,6.63l-40,80A12,12,0,0,0,4,128v56a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V128A12,12,0,0,0,250.73,122.63ZM96.58,60l8,16H83.42l-8-16Zm48,0,8,16H131.42l-8-16Zm-41.16,56-8-16h21.16l8,16Zm48,0-8-16h21.16l8,16Zm48,0-8-16h21.16l8,16Zm1.16-40H179.42l-8-16h21.16ZM28,130.83l28-56,28,56V180H28ZM108,180V140H228v40Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
