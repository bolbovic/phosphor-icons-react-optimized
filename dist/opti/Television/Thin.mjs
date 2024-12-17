var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ V.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M216,68H137.66l41.17-41.17a4,4,0,1,0-5.66-5.66L128,66.34,82.83,21.17a4,4,0,0,0-5.66,5.66L118.34,68H40A12,12,0,0,0,28,80V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68ZM36,200V80a4,4,0,0,1,4-4H148V204H40A4,4,0,0,1,36,200Zm184,0a4,4,0,0,1-4,4H156V76h60a4,4,0,0,1,4,4Zm-24-84a8,8,0,1,1-8-8A8,8,0,0,1,196,116Zm0,48a8,8,0,1,1-8-8A8,8,0,0,1,196,164Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
