var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var h = m, { children: a } = h, t = V(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M232,60H24A12,12,0,0,0,12,72V184a12,12,0,0,0,12,12H232a12,12,0,0,0,12-12V72A12,12,0,0,0,232,60Zm4,124a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4ZM124,100v24h12a4,4,0,0,1,0,8H124v24h20a4,4,0,0,1,0,8H120a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4h24a4,4,0,0,1,0,8Zm87.85-2.92-18,64a4,4,0,0,1-7.7,0l-18-64a4,4,0,1,1,7.7-2.16L190,145.23l14.15-50.31a4,4,0,0,1,7.7,2.16ZM64,92H56a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h8a28,28,0,0,0,28-28V120A28,28,0,0,0,64,92Zm20,44a20,20,0,0,1-20,20H60V100h4a20,20,0,0,1,20,20Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
