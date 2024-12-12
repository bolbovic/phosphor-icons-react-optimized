var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const l = Z((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M178,80a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H184A6,6,0,0,1,178,80ZM40,86H146v18a6,6,0,0,0,12,0V56a6,6,0,0,0-12,0V74H40a6,6,0,0,0,0,12Zm176,84H120a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12ZM88,146a6,6,0,0,0-6,6v18H40a6,6,0,0,0,0,12H82v18a6,6,0,0,0,12,0V152A6,6,0,0,0,88,146Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
