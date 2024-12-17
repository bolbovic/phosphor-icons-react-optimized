var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M172,148a8,8,0,1,1-8-8A8,8,0,0,1,172,148Zm-80-8a8,8,0,1,0,8,8A8,8,0,0,0,92,140Zm144,20v24a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V161.13A109.43,109.43,0,0,1,57.18,78.84l-28-28a4,4,0,0,1,5.66-5.66L63.41,73.75A106.63,106.63,0,0,1,127.62,52H128a107.16,107.16,0,0,1,64.78,21.57l28.39-28.4a4,4,0,1,1,5.66,5.66L199,78.64c1.78,1.56,3.52,3.17,5.21,4.86A107.25,107.25,0,0,1,236,160Zm-8,0A100,100,0,0,0,128,60h-.35C72.7,60.19,28,105.56,28,161.13V184a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
