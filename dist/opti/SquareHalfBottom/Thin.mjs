var V = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (e, m, a) => m in e ? V(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, i = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && o(e, a, m[a]);
  if (H)
    for (var a of H(m))
      h.call(m, a) && o(e, a, m[a]);
  return e;
};
var p = (e, m) => {
  var a = {};
  for (var t in e)
    Z.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && H)
    for (var t of H(e))
      m.indexOf(t) < 0 && h.call(e, t) && (a[t] = e[t]);
  return a;
};
import v, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const c = n((t, a) => {
  var r = t, { children: e } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(A, i({ ref: a }, m), e, /* @__PURE__ */ v.createElement("path", { d: "M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44ZM56,52H200a4,4,0,0,1,4,4v68H52V56A4,4,0,0,1,56,52Zm52,80v72H84V132Zm8,0h24v72H116Zm32,0h24v72H148ZM52,200V132H76v72H56A4,4,0,0,1,52,200Zm148,4H180V132h24v68A4,4,0,0,1,200,204Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
