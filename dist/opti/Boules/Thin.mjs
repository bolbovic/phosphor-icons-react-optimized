var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm62.13,32.21L60.21,190.13a91.94,91.94,0,0,1-14.88-21.8l123-123A91.94,91.94,0,0,1,190.13,60.21Zm5.66,5.66a92.24,92.24,0,0,1,14.88,21.8l-123,123a92.24,92.24,0,0,1-21.8-14.88ZM128,36a91.4,91.4,0,0,1,32.43,5.91L41.91,160.43A92,92,0,0,1,128,36Zm0,184a91.4,91.4,0,0,1-32.43-5.91L214.09,95.57A92,92,0,0,1,128,220Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
