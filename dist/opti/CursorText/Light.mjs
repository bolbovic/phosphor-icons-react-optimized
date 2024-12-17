var s = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (H)
    for (var e of H(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const l = A((r, e) => {
  var h = r, { children: a } = h, t = c(h, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M182,208a6,6,0,0,1-6,6H160a38,38,0,0,1-32-17.55A38,38,0,0,1,96,214H80a6,6,0,0,1,0-12H96a26,26,0,0,0,26-26V134H104a6,6,0,0,1,0-12h18V80A26,26,0,0,0,96,54H80a6,6,0,0,1,0-12H96a38,38,0,0,1,32,17.55A38,38,0,0,1,160,42h16a6,6,0,0,1,0,12H160a26,26,0,0,0-26,26v42h18a6,6,0,0,1,0,12H134v42a26,26,0,0,0,26,26h16A6,6,0,0,1,182,208Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
