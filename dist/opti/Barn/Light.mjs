var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const c = M((m, e) => {
  var l = m, { children: a } = l, t = i(l, ["children"]);
  return /* @__PURE__ */ p.createElement(V, Z({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M240,194H230V124.32l5.12,7.17a6,6,0,1,0,9.76-7l-40-56a6.14,6.14,0,0,0-1.47-1.45L135.77,20.35a14,14,0,0,0-15.62.06L52.59,67.06a6.14,6.14,0,0,0-1.47,1.45l-40,56a6,6,0,1,0,9.76,7L26,124.32V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,107.52,60.27,76.34l66.62-46a2,2,0,0,1,2.14-.06l66.7,46.06L218,107.52V194H190V120a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v74H38Zm90,45.11L90.72,126h74.56Zm50-21v56.68L138.32,160ZM117.68,160,78,188.34V131.66ZM128,167.37,165.28,194H90.72ZM106,88a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,88Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
