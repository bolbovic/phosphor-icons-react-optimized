var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var A = r, { children: a } = A, t = h(A, ["children"]);
  return /* @__PURE__ */ n.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M29.6,123.2a4,4,0,0,0,5.6-.8,56,56,0,0,1,89.6,0,3.93,3.93,0,0,0,6.38,0h0a56,56,0,0,1,89.6,0,4,4,0,1,0,6.4-4.8,63.55,63.55,0,0,0-32.5-22.85,36,36,0,1,0-37.4,0,63.39,63.39,0,0,0-29.3,19,63.34,63.34,0,0,0-29.3-19,36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,28.8,117.6,4,4,0,0,0,29.6,123.2ZM148,64a28,28,0,1,1,28,28A28,28,0,0,1,148,64ZM52,64A28,28,0,1,1,80,92,28,28,0,0,1,52,64ZM194.7,198.75a36,36,0,1,0-37.4,0A63.39,63.39,0,0,0,128,217.7a63.34,63.34,0,0,0-29.3-18.95,36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,28.8,221.6a4,4,0,0,0,6.4,4.8,56,56,0,0,1,89.6,0,3.93,3.93,0,0,0,6.38,0h0a56,56,0,0,1,89.6,0,4,4,0,0,0,6.4-4.8A63.55,63.55,0,0,0,194.7,198.75ZM52,168a28,28,0,1,1,28,28A28,28,0,0,1,52,168Zm96,0a28,28,0,1,1,28,28A28,28,0,0,1,148,168Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
