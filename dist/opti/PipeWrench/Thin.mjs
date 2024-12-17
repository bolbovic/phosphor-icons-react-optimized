var f = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && r(a, l, e[l]);
  if (L)
    for (var l of L(e))
      i.call(e, l) && r(a, l, e[l]);
  return a;
};
var n = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && L)
    for (var t of L(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((t, l) => {
  var m = t, { children: a } = m, e = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M217.46,57.85l-.09-.08L172.44,15.46a12,12,0,0,0-16.91,0l-47.38,47-4.35-4.39A21,21,0,0,0,74.12,87.78l4.25,4.31L55.51,114.83a12,12,0,0,0,0,17L68.2,144.48a12,12,0,0,0,17,0l22.77-22.45,14.91,15.12a4,4,0,0,1,0,5.66h0L58.14,208.2a21,21,0,1,0,29.67,29.65l88.68-89.37a12,12,0,0,0,0-16.95L138,92.62l15.77-15.45a4,4,0,0,1,5.68,0l37.4,35.35a12,12,0,0,0,16.93,0l3.72-3.71a36,36,0,0,0,0-50.92Zm-137.95,81a4,4,0,0,1-5.65,0L61.17,126.14a4,4,0,0,1,0-5.65L84,97.78l18.32,18.58Zm91.31,4L82.14,232.2a13,13,0,1,1-18.33-18.36l64.69-65.37a12,12,0,0,0,0-16.94L79.8,82.14A13,13,0,0,1,98.13,63.78l72.7,73.39A4,4,0,0,1,170.82,142.84Zm41-39.73-3.72,3.72a4,4,0,0,1-5.65,0l-.09-.08L165,71.42a12,12,0,0,0-16.85.06L132.33,86.94,113.78,68.21l47.39-47a4,4,0,0,1,5.66,0l.09.08,44.92,42.3a28,28,0,0,1,0,39.56Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
