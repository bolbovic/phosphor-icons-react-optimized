var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    V.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,96a8,8,0,0,1,16,0v50.75a8,8,0,0,1-16,0Zm-32,8a8,8,0,0,1,16,0v10.75a8,8,0,0,1-16,0ZM72,152a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm125.66,45.66a8,8,0,0,1-11.32,0L136,147.31V168a8,8,0,0,1-16,0V131.31l-16-16V184a8,8,0,0,1-16,0V99.5c0-.06,0-.12,0-.18L58.34,69.66A8,8,0,0,1,69.66,58.34l128,128A8,8,0,0,1,197.66,197.66Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
