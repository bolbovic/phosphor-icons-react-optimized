var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = A((r, e) => {
  var H = r, { children: a } = H, t = h(H, ["children"]);
  return /* @__PURE__ */ n.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M243.94,31.3a4,4,0,0,0-4.64-3.24l-224,40A4,4,0,0,0,16,76a4.14,4.14,0,0,0,.7-.06L124,56.78V100H64a28,28,0,0,0-28,28v64a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V128a28,28,0,0,0-28-28H132V55.35L240.7,35.94A4,4,0,0,0,243.94,31.3ZM100,164V108h56v56ZM64,108H92v56H44V128A20,20,0,0,1,64,108ZM192,212H64a20,20,0,0,1-20-20V172H212v20A20,20,0,0,1,192,212Zm20-84v36H164V108h28A20,20,0,0,1,212,128Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
