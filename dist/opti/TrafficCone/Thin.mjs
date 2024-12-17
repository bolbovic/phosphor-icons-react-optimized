var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((r, e) => {
  var H = r, { children: a } = H, t = l(H, ["children"]);
  return /* @__PURE__ */ n.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M232,212H210.84L149.65,36.06A12,12,0,0,0,138.31,28H117.69a12,12,0,0,0-11.34,8.06L45.16,212H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM92.58,100h70.84l19.47,56H73.11Zm21.33-61.31A4,4,0,0,1,117.69,36h20.62a4,4,0,0,1,3.78,2.69L160.63,92H95.37ZM70.32,164H185.68l16.69,48H53.63Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
