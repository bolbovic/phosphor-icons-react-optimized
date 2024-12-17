var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const H = s((r, e) => {
  var l = r, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M132,40V216a4,4,0,0,1-8,0V40a4,4,0,0,1,8,0ZM96,124H25.66L50.83,98.83a4,4,0,0,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,1,0,5.66-5.66L25.66,132H96a4,4,0,0,0,0-8Zm146.83,1.17-32-32a4,4,0,0,0-5.66,5.66L230.34,124H160a4,4,0,0,0,0,8h70.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,242.83,125.17Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
