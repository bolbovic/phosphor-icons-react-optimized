var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && V(a, e, m[e]);
  return a;
};
var v = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((t, e) => {
  var o = t, { children: a } = o, m = v(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M200,60H32A20,20,0,0,0,12,80v96a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V80A20,20,0,0,0,200,60Zm12,116a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V80A12,12,0,0,1,32,68H200a12,12,0,0,1,12,12ZM180,96v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Zm-40,0v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Zm-40,0v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0ZM60,96v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Zm192,0v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
