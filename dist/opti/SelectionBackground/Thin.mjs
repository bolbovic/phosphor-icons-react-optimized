var n = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && o(a, e, m[e]);
  if (h)
    for (var e of h(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var H = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const c = v((t, e) => {
  var r = t, { children: a } = r, m = H(r, ["children"]);
  return /* @__PURE__ */ V.createElement(A, p({ ref: e }, m), a, /* @__PURE__ */ V.createElement("path", { d: "M160,84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H160a12,12,0,0,0,12-12V96A12,12,0,0,0,160,84Zm4,124a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H160a4,4,0,0,1,4,4ZM140,40a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4,4,0,0,1,140,40Zm80,8v8a4,4,0,0,1-8,0V48a4,4,0,0,0-4-4h-8a4,4,0,0,1,0-8h8A12,12,0,0,1,220,48Zm0,48v16a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Zm0,56v8a12,12,0,0,1-12,12h-8a4,4,0,0,1,0-8h8a4,4,0,0,0,4-4v-8a4,4,0,0,1,8,0ZM84,56V48A12,12,0,0,1,96,36h8a4,4,0,0,1,0,8H96a4,4,0,0,0-4,4v8a4,4,0,0,1-8,0Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
