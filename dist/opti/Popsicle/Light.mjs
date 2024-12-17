var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(v, V({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,10A70.08,70.08,0,0,0,58,80v96a14,14,0,0,0,14,14h34v42a22,22,0,0,0,44,0V190h34a14,14,0,0,0,14-14V80A70.08,70.08,0,0,0,128,10Zm10,222a10,10,0,0,1-20,0V190h20Zm48-56a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V80a58,58,0,0,1,116,0ZM118,72v80a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm32,0v80a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
