var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(c, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M200,44a4,4,0,0,0,0,8,20,20,0,0,1,20,20v60H36V72A20,20,0,0,1,56,52a4,4,0,0,0,0-8A28,28,0,0,0,28,72v92a40,40,0,0,0,80,0V140h40v24a40,40,0,0,0,80,0V72A28,28,0,0,0,200,44ZM36,164V140h2.34l49.27,49.26A32,32,0,0,1,36,164Zm64,0a31.83,31.83,0,0,1-6.74,19.61L49.66,140H100Zm56,0V140h2.34l49.27,49.26A32,32,0,0,1,156,164Zm57.26,19.61L169.66,140H220v24A31.83,31.83,0,0,1,213.26,183.61Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
