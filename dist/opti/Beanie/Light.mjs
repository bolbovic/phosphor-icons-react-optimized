var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as h } from "react";
import c from "../../lib/OptiBase.mjs";
const f = h((m, e) => {
  var o = m, { children: a } = o, t = v(o, ["children"]);
  return /* @__PURE__ */ A.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M222,163.37V144a94.17,94.17,0,0,0-73.7-91.79,26,26,0,1,0-40.6,0A94.17,94.17,0,0,0,34,144v19.37A14,14,0,0,0,26,176v32a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V176A14,14,0,0,0,222,163.37ZM114,36a14,14,0,1,1,14,14A14,14,0,0,1,114,36Zm14,26a82.1,82.1,0,0,1,82,82v18H46V144A82.1,82.1,0,0,1,128,62Zm-6,112v36H78V174Zm12,0h44v36H134ZM38,208V176a2,2,0,0,1,2-2H66v36H40A2,2,0,0,1,38,208Zm180,0a2,2,0,0,1-2,2H190V174h26a2,2,0,0,1,2,2Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
