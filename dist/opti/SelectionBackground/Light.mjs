var v = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((m, e) => {
  var r = m, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ V.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M160,82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H160a14,14,0,0,0,14-14V96A14,14,0,0,0,160,82Zm2,126a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H160a2,2,0,0,1,2,2ZM138,40a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,40Zm84,8v8a6,6,0,0,1-12,0V48a2,2,0,0,0-2-2h-8a6,6,0,0,1,0-12h8A14,14,0,0,1,222,48Zm0,48v16a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0Zm0,56v8a14,14,0,0,1-14,14h-8a6,6,0,0,1,0-12h8a2,2,0,0,0,2-2v-8a6,6,0,0,1,12,0ZM82,56V48A14,14,0,0,1,96,34h8a6,6,0,0,1,0,12H96a2,2,0,0,0-2,2v8a6,6,0,0,1-12,0Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
