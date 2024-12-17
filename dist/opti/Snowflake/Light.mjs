var s = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && m(a, l, e[l]);
  if (L)
    for (var l of L(e))
      i.call(e, l) && m(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && L)
    for (var t of L(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((t, l) => {
  var r = t, { children: a } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M221.83,150.57a6,6,0,0,1-4.4,7.26l-26.62,6.54,7,26.08a6,6,0,0,1-4.24,7.35,6.4,6.4,0,0,1-1.55.2,6,6,0,0,1-5.8-4.45L178.27,164,134,138.39v51.13l22.24,22.24a6,6,0,1,1-8.48,8.48L128,200.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L122,189.52V138.39L77.73,164l-7.93,29.6A6,6,0,0,1,64,198a6.4,6.4,0,0,1-1.55-.2,6,6,0,0,1-4.24-7.35l7-26.08-26.62-6.54a6,6,0,0,1,2.86-11.66l30.23,7.43L116,128,71.66,102.4l-30.23,7.43A5.88,5.88,0,0,1,40,110a6,6,0,0,1-1.43-11.83l26.62-6.54-7-26.08a6,6,0,1,1,11.59-3.1l7.93,29.6L122,117.61V66.48L99.76,44.24a6,6,0,0,1,8.48-8.48L128,55.51l19.76-19.75a6,6,0,0,1,8.48,8.48L134,66.48v51.13l44.27-25.56,7.93-29.6a6,6,0,1,1,11.59,3.1l-7,26.08,26.62,6.54A6,6,0,0,1,216,110a5.88,5.88,0,0,1-1.43-.17l-30.23-7.43L140,128l44.34,25.6,30.23-7.43A6,6,0,0,1,221.83,150.57Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
