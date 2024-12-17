var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var A = m, { children: a } = A, t = Z(A, ["children"]);
  return /* @__PURE__ */ n.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M60,236a8,8,0,1,1-8-8A8,8,0,0,1,60,236Zm24-40a8,8,0,1,0,8,8A8,8,0,0,0,84,196Zm-64,0a8,8,0,1,0,8,8A8,8,0,0,0,20,196Zm32-32a8,8,0,1,0,8,8A8,8,0,0,0,52,164ZM252,40a4,4,0,0,1-4,4H217.66L187.73,73.93,165.86,202a12,12,0,0,1-8.17,9.44A12.09,12.09,0,0,1,154,212a12,12,0,0,1-8.46-3.52l-98-98A12,12,0,0,1,54,90.14l128-21.87,31.1-31.1A4,4,0,0,1,216,36h32A4,4,0,0,1,252,40ZM179.11,76.89,55.37,98a4,4,0,0,0-2.19,6.78l98,98a4,4,0,0,0,6.78-2.17Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
