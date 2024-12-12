var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, L, l) => L in a ? s(a, L, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[L] = l, p = (a, L) => {
  for (var l in L || (L = {}))
    o.call(L, l) && r(a, l, L[l]);
  if (t)
    for (var l of t(L))
      i.call(L, l) && r(a, l, L[l]);
  return a;
};
var c = (a, L) => {
  var l = {};
  for (var e in a)
    o.call(a, e) && L.indexOf(e) < 0 && (l[e] = a[e]);
  if (a != null && t)
    for (var e of t(a))
      L.indexOf(e) < 0 && i.call(a, e) && (l[e] = a[e]);
  return l;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((e, l) => {
  var m = e, { children: a } = m, L = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: l }, L), a, /* @__PURE__ */ f.createElement("path", { d: "M148.24,139.76a6,6,0,0,0-8.48,0L120,159.51,96.49,136l19.75-19.76a6,6,0,0,0-8.48-8.48L88,127.51,68.24,107.76a6,6,0,0,0-8.48,8.48L67.51,124,42.79,148.73a30,30,0,0,0,0,42.42l6.78,6.79L19.76,227.76a6,6,0,1,0,8.48,8.48l29.82-29.81,6.79,6.78a30,30,0,0,0,42.42,0L132,188.49l7.76,7.75a6,6,0,0,0,8.48-8.48L128.49,168l19.75-19.76A6,6,0,0,0,148.24,139.76Zm-49.45,65a18,18,0,0,1-25.46,0L51.27,182.67a18,18,0,0,1,0-25.46L76,132.49,123.51,180Zm137.45-185a6,6,0,0,0-8.48,0L197.94,49.57l-6.79-6.78a30,30,0,0,0-42.42,0L124,67.51l-7.76-7.75a6,6,0,0,0-8.48,8.48l80,80a6,6,0,0,0,8.48-8.48L188.49,132l24.72-24.73a30,30,0,0,0,0-42.42l-6.78-6.79,29.81-29.82A6,6,0,0,0,236.24,19.76Zm-31.51,79L180,123.51,132.49,76l24.72-24.73a18,18,0,0,1,25.46,0l22.06,22.06a18,18,0,0,1,0,25.46Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
