var L = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && h(a, e, t[e]);
  if (V)
    for (var e of V(t))
      o.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    m.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && V)
    for (var l of V(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import n, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M234,122.75,179.71,41.34a12,12,0,0,0-10-5.34H86.27a12,12,0,0,0-10,5.34L22,122.75a12,12,0,0,0-1.6,9.82l21.44,78.59A12,12,0,0,0,53.43,220H80a12,12,0,0,0,12-12V188h72v20a12,12,0,0,0,12,12h26.57a12,12,0,0,0,11.57-8.84l21.44-78.59A12,12,0,0,0,234,122.75ZM80,180a4,4,0,0,1-4-4V62l32,18.86V136a4,4,0,0,0,8,0V85.57l10,5.88a4,4,0,0,0,4.06,0l10-5.88V128a4,4,0,0,0,8,0V80.85L180,62V176a4,4,0,0,1-4,4ZM82.94,45.78A4,4,0,0,1,86.27,44h83.46a4,4,0,0,1,3.33,1.78l5.27,7.91L128,83.36,77.67,53.69ZM84,208a4,4,0,0,1-4,4H53.43a4,4,0,0,1-3.85-2.95L28.14,130.46a4,4,0,0,1,.53-3.27L68,68.2V176a12,12,0,0,0,12,12h4Zm143.86-77.54-21.44,78.59a4,4,0,0,1-3.85,2.95H176a4,4,0,0,1-4-4V188h4a12,12,0,0,0,12-12V68.2l39.33,59A4,4,0,0,1,227.86,130.46Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
