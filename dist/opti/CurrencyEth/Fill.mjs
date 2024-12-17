var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, l) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[a] = l, c = (e, a) => {
  for (var l in a || (a = {}))
    i.call(a, l) && o(e, l, a[l]);
  if (m)
    for (var l of m(a))
      p.call(a, l) && o(e, l, a[l]);
  return e;
};
var f = (e, a) => {
  var l = {};
  for (var t in e)
    i.call(e, t) && a.indexOf(t) < 0 && (l[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      a.indexOf(t) < 0 && p.call(e, t) && (l[t] = e[t]);
  return l;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const E = d((t, l) => {
  var r = t, { children: e } = r, a = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: l }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,155.58V39.13l67.42,85.8Zm-16,0L52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
