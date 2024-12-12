var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && p(e, t, a[t]);
  if (o)
    for (var t of o(a))
      i.call(a, t) && p(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var c in e)
    n.call(e, c) && a.indexOf(c) < 0 && (t[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      a.indexOf(c) < 0 && i.call(e, c) && (t[c] = e[c]);
  return t;
};
import r, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const C = s((c, t) => {
  var m = c, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ r.createElement(A, d({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z" }));
});
C.displayName = "Duotone";
export {
  C as Duotone
};
