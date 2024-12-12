var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M148,104V64a4,4,0,0,1,8,0V94.34l49.17-49.17a4,4,0,1,1,5.66,5.66L161.66,100H192a4,4,0,0,1,0,8H152A4,4,0,0,1,148,104Zm-44,44H64a4,4,0,0,0,0,8H94.34L45.17,205.17a4,4,0,0,0,5.66,5.66L100,161.66V192a4,4,0,0,0,8,0V152A4,4,0,0,0,104,148Zm57.66,8H192a4,4,0,0,0,0-8H152a4,4,0,0,0-4,4v40a4,4,0,0,0,8,0V161.66l49.17,49.17a4,4,0,0,0,5.66-5.66ZM104,60a4,4,0,0,0-4,4V94.34L50.83,45.17a4,4,0,0,0-5.66,5.66L94.34,100H64a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V64A4,4,0,0,0,104,60Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
