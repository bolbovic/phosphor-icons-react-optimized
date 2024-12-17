var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var H = (a, m) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, e) => {
  var Z = t, { children: a } = Z, m = H(Z, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M232,52H16a4,4,0,0,0-4,4V208a4,4,0,0,0,8,0V188H44v20a4,4,0,0,0,8,0V188H76v20a4,4,0,0,0,8,0V188h24v20a4,4,0,0,0,8,0V188H232a12,12,0,0,0,12-12V64A12,12,0,0,0,232,52Zm4,124a4,4,0,0,1-4,4H20V60H232a4,4,0,0,1,4,4ZM176,84a36,36,0,1,0,36,36A36,36,0,0,0,176,84Zm-28,36a27.89,27.89,0,0,1,5.58-16.76l39.18,39.18A28,28,0,0,1,148,120Zm50.42,16.76L159.24,97.58a28,28,0,0,1,39.18,39.18ZM80,84a36,36,0,1,0,36,36A36,36,0,0,0,80,84ZM52,120a27.89,27.89,0,0,1,5.58-16.76l39.18,39.18A28,28,0,0,1,52,120Zm50.42,16.76L63.24,97.58a28,28,0,0,1,39.18,39.18Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
