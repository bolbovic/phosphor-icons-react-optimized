var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ A.createElement(h, V({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M88,158H216a14,14,0,0,0,14-14V72a14,14,0,0,0-14-14H182V40a14,14,0,0,0-14-14H136a14,14,0,0,0-14,14V58H88A14,14,0,0,0,74,72v72A14,14,0,0,0,88,158ZM134,40a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V58H134ZM86,72a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v72a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2Zm0,152a14,14,0,1,1-14-14A14,14,0,0,1,86,224Zm144,0a14,14,0,1,1-14-14A14,14,0,0,1,230,224Zm16-40a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H42V75.31a2,2,0,0,0-.59-1.41L19.76,52.24a6,6,0,1,1,8.48-8.48L49.9,65.41a13.94,13.94,0,0,1,4.1,9.9V178H240A6,6,0,0,1,246,184Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
