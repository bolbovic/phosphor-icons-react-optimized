var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const V = h((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M45.39,53.06a4,4,0,0,0-1.39,3V224a4,4,0,0,0,8,0V177.87c29.41-24.39,55.08-11.69,82.23,1.73,16.5,8.17,33.33,16.5,51.13,16.5,13.14,0,26.81-4.55,41.26-17.06a4,4,0,0,0,1.38-3v-120a4,4,0,0,0-6.62-3c-30,26-56,13.07-83.61-.57C109.07,38.28,79.4,23.62,45.39,53.06ZM220,174.17c-29.41,24.4-55.08,11.7-82.23-1.73-26.82-13.27-54.5-27-85.77-4.66V57.92c29.41-24.4,55.08-11.7,82.23,1.73,26.82,13.27,54.5,27,85.77,4.66Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
