var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, e) => {
  var h = H, { children: a } = h, t = v(h, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M214,79v1a38,38,0,0,1-38,38H134v84h10a18,18,0,0,0,12-31.42,6,6,0,1,1,8-8.94A30,30,0,0,1,144,214H134v18a6,6,0,0,1-12,0V214H96a6,6,0,0,1,0-12h26V118H96a18,18,0,0,0,0,36,6,6,0,0,1,0,12,30,30,0,0,1,0-60h26V24a6,6,0,0,1,12,0v82h42a26,26,0,0,0,26-26V79a25,25,0,0,0-25-25H160a6,6,0,0,1,0-12h17a37,37,0,0,1,37,37ZM56,94H32a6,6,0,0,1-6-6V80A38,38,0,0,1,64,42H96a6,6,0,0,1,0,12H94v2A38,38,0,0,1,56,94ZM82,54H64A26,26,0,0,0,38,80v2H56A26,26,0,0,0,82,56Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
