var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var H = m, { children: a } = H, t = Z(H, ["children"]);
  return /* @__PURE__ */ c.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M248,66H8A6,6,0,0,0,8,78H18V192a6,6,0,0,0,12,0V142H226v50a6,6,0,0,0,12,0V78h10a6,6,0,0,0,0-12ZM30,78h92v52H30Zm196,52H134V78h92ZM94,104a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H88A6,6,0,0,1,94,104Zm68,0a6,6,0,0,1,6-6h24a6,6,0,0,1,0,12H168A6,6,0,0,1,162,104Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
