var d = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? d(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (H)
    for (var e of H(m))
      r.call(m, e) && Z(a, e, m[e]);
  return a;
};
var h = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && r.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as l } from "react";
import v from "../../lib/OptiBase.mjs";
const M = l((t, e) => {
  var V = t, { children: a } = V, m = h(V, ["children"]);
  return /* @__PURE__ */ p.createElement(v, A({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M100,40a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,40Zm44,164H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24ZM208,28H184a12,12,0,0,0,0,24h20V72a12,12,0,0,0,24,0V48A20,20,0,0,0,208,28Zm8,72a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,216,100Zm0,72a12,12,0,0,0-12,12v20H184a12,12,0,0,0,0,24h24a20,20,0,0,0,20-20V184A12,12,0,0,0,216,172ZM40,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,40,156Zm32,48H52V184a12,12,0,0,0-24,0v24a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24ZM40,84A12,12,0,0,0,52,72V52H72a12,12,0,0,0,0-24H48A20,20,0,0,0,28,48V72A12,12,0,0,0,40,84ZM80,68h96a12,12,0,0,1,12,12v96a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V80A12,12,0,0,1,80,68Zm12,96h72V92H92Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
