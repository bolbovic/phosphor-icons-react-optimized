var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    i.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && p.call(e, l) && (a[l] = e[l]);
  return a;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const H = d((l, a) => {
  var m = l, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM79.32,188l90.34-90.34,16.69,16.68L96,204.69Zm79-101.66h0L68,176.69,51.31,160l90.35-90.34ZM48,179.31,76.69,208H48Z" }));
});
H.displayName = "Fill";
export {
  H as Fill
};