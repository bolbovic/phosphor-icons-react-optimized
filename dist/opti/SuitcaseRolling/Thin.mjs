var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && o(a, e, m[e]);
  if (V)
    for (var e of V(m))
      h.call(m, e) && o(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      m.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const c = v((t, e) => {
  var r = t, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(A, i({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M100,88v96a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Zm28-4a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V88A4,4,0,0,0,128,84Zm32,0a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V88A4,4,0,0,0,160,84Zm44-20V208a12,12,0,0,1-12,12H172v20a4,4,0,0,1-8,0V220H92v20a4,4,0,0,1-8,0V220H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H92V24A20,20,0,0,1,112,4h32a20,20,0,0,1,20,20V52h28A12,12,0,0,1,204,64ZM100,52h56V24a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12Zm96,12a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
