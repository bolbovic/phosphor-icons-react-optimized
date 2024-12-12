var n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, A, e) => A in a ? n(a, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[A] = e, p = (a, A) => {
  for (var e in A || (A = {}))
    o.call(A, e) && r(a, e, A[e]);
  if (t)
    for (var e of t(A))
      i.call(A, e) && r(a, e, A[e]);
  return a;
};
var M = (a, A) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && A.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      A.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var Z = m, { children: a } = Z, A = M(Z, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: e }, A), a, /* @__PURE__ */ l.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,152a52,52,0,1,1,52-52A52.06,52.06,0,0,1,128,180Zm39.47-97.13A59.7,59.7,0,0,0,132,68.15V36.09a91.64,91.64,0,0,1,58.13,24.12ZM124,68.15A59.7,59.7,0,0,0,88.53,82.87L65.87,60.21A91.64,91.64,0,0,1,124,36.09ZM82.87,88.53A59.7,59.7,0,0,0,68.15,124H36.09A91.64,91.64,0,0,1,60.21,65.87ZM68.15,132a59.7,59.7,0,0,0,14.72,35.47L60.21,190.13A91.64,91.64,0,0,1,36.09,132Zm20.38,41.13A59.7,59.7,0,0,0,124,187.85v32.06a91.64,91.64,0,0,1-58.13-24.12ZM132,187.85a59.7,59.7,0,0,0,35.47-14.72l22.66,22.66A91.64,91.64,0,0,1,132,219.91Zm41.13-20.38A59.7,59.7,0,0,0,187.85,132h32.06a91.64,91.64,0,0,1-24.12,58.13ZM187.85,124a59.7,59.7,0,0,0-14.72-35.47l22.66-22.66A91.64,91.64,0,0,1,219.91,124Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
