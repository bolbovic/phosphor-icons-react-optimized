var H = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var Z = (e, A, a) => A in e ? H(e, A, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[A] = a, p = (e, A) => {
  for (var a in A || (A = {}))
    m.call(A, a) && Z(e, a, A[a]);
  if (o)
    for (var a of o(A))
      M.call(A, a) && Z(e, a, A[a]);
  return e;
};
var d = (e, A) => {
  var a = {};
  for (var t in e)
    m.call(e, t) && A.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && o)
    for (var t of o(e))
      A.indexOf(t) < 0 && M.call(e, t) && (a[t] = e[t]);
  return a;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, a) => {
  var r = t, { children: e } = r, A = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: a }, A), e, /* @__PURE__ */ l.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM60,177.28A83.59,83.59,0,0,1,44.87,140H75.14A83.1,83.1,0,0,1,60,177.28ZM44.87,116A83.59,83.59,0,0,1,60,78.72,83.1,83.1,0,0,1,75.14,116ZM116,211.13a83.63,83.63,0,0,1-39-16.46A106.94,106.94,0,0,0,99.34,140H116ZM116,116H99.34A106.94,106.94,0,0,0,77,61.33a83.63,83.63,0,0,1,39-16.46Zm80-37.28A83.59,83.59,0,0,1,211.13,116H180.86A83.1,83.1,0,0,1,196,78.72ZM140,211.13V140h16.66A106.94,106.94,0,0,0,179,194.67,83.63,83.63,0,0,1,140,211.13ZM156.66,116H140V44.87a83.63,83.63,0,0,1,39,16.46A106.94,106.94,0,0,0,156.66,116ZM196,177.28A83.1,83.1,0,0,1,180.86,140h30.27A83.59,83.59,0,0,1,196,177.28Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
