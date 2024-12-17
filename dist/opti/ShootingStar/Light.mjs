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
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && L)
    for (var t of L(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, l) => {
  var m = t, { children: a } = m, e = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M237.45,70.69a11.42,11.42,0,0,0-10-7.9l-38.16-3L174.59,25a11.51,11.51,0,0,0-21.18,0L138.73,59.78l-38.15,3a11.39,11.39,0,0,0-6.53,20.06l29,24.48-8.86,36.59a11.35,11.35,0,0,0,4.34,11.83,11.51,11.51,0,0,0,12.78.58L164,136.66l32.69,19.67a11.5,11.5,0,0,0,12.77-.58,11.33,11.33,0,0,0,4.34-11.83L205,107.33l29-24.48A11.32,11.32,0,0,0,237.45,70.69Zm-43.08,29.87a6,6,0,0,0-2,6l9.41,38.86L167.1,124.52a6,6,0,0,0-6.19,0l-34.72,20.89,9.41-38.86a6,6,0,0,0-2-6L102.94,74.65l40.37-3.19a6,6,0,0,0,5.06-3.65l15.63-37,15.63,37a6,6,0,0,0,5.06,3.65l40.37,3.19ZM86.69,121.79,28.24,180.24a6,6,0,0,1-8.48-8.48l58.45-58.45a6,6,0,0,1,8.48,8.48Zm10.82,52.7a6,6,0,0,1,0,8.49L44.24,236.24a6,6,0,0,1-8.48-8.48L89,174.49A6,6,0,0,1,97.51,174.49Zm73-1a6,6,0,0,1,0,8.48l-54.29,54.28a6,6,0,0,1-8.48-8.48L162,173.48A6,6,0,0,1,170.53,173.48Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
