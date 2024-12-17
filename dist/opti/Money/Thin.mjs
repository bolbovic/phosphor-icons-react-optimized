var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && Z(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && Z(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var A = m, { children: a } = A, t = M(A, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M128,164a36,36,0,1,0-36-36A36,36,0,0,0,128,164Zm0-64a28,28,0,1,1-28,28A28,28,0,0,1,128,100ZM240,60H16a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H240a4,4,0,0,0,4-4V64A4,4,0,0,0,240,60ZM20,107.26A52.75,52.75,0,0,0,59.26,68H196.74A52.75,52.75,0,0,0,236,107.26v41.48A52.75,52.75,0,0,0,196.74,188H59.26A52.75,52.75,0,0,0,20,148.74ZM236,99a44.8,44.8,0,0,1-31-31h31ZM51,68A44.8,44.8,0,0,1,20,99V68ZM20,157a44.8,44.8,0,0,1,31,31H20Zm185,31a44.8,44.8,0,0,1,31-31v31Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
