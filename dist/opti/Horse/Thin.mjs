var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var l = m, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ h.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M132,100a8,8,0,1,1-8-8A8,8,0,0,1,132,100Zm96,29.42A100.29,100.29,0,0,1,130,228l-2.09,0a99.37,99.37,0,0,1-66.6-25,4,4,0,1,1,5.34-6,89.08,89.08,0,0,0,24.09,15.39l31.35-43.11c-25.16-13-53.95-8.1-68.14-5.7a27.85,27.85,0,0,1-27.43-11.22c-.05-.07-.1-.14-.14-.21l-13.79-22a3.94,3.94,0,0,1-.5-3,4,4,0,0,1,1.79-2.5L116,61.76V32a4,4,0,0,1,4-4h8A100,100,0,0,1,228,129.42Zm-34.48-66A91.35,91.35,0,0,0,128,36h-4V64a4,4,0,0,1-1.9,3.41L21.53,129.29l11.58,18.52a19.89,19.89,0,0,0,19.52,7.91c15.68-2.66,48.08-8.13,76.39,8.25a44,44,0,0,0,43-44,4,4,0,0,1,8,0A52.06,52.06,0,0,1,130.07,172l-31.56,43.4A94.54,94.54,0,0,0,129.86,220,92,92,0,0,0,193.51,63.4Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};