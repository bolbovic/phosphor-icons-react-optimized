var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const L = h((m, e) => {
  var l = m, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M192,140H64a4,4,0,0,1,0-8H192a4,4,0,0,1,0,8Zm40-56H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM128,180H104a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm90.83-6.83a4,4,0,0,0-5.66,0L192,194.34l-21.17-21.17a4,4,0,0,0-5.66,5.66L186.34,200l-21.17,21.17a4,4,0,0,0,5.66,5.66L192,205.66l21.17,21.17a4,4,0,0,0,5.66-5.66L197.66,200l21.17-21.17A4,4,0,0,0,218.83,173.17Z" }));
});
L.displayName = "Thin";
export {
  L as Thin
};
