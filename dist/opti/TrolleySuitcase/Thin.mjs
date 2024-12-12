var n = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var r = m, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M88,156H216a12,12,0,0,0,12-12V72a12,12,0,0,0-12-12H180V40a12,12,0,0,0-12-12H136a12,12,0,0,0-12,12V60H88A12,12,0,0,0,76,72v72A12,12,0,0,0,88,156ZM132,40a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V60H132ZM84,72a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v72a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4Zm0,152a12,12,0,1,1-12-12A12,12,0,0,1,84,224Zm144,0a12,12,0,1,1-12-12A12,12,0,0,1,228,224Zm16-40a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H44V75.31a4,4,0,0,0-1.17-2.83L21.17,50.83a4,4,0,0,1,5.66-5.66L48.49,66.83A12,12,0,0,1,52,75.31V180H240A4,4,0,0,1,244,184Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
