var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var h = (a, e, m) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, L = (a, e) => {
  for (var m in e || (e = {}))
    o.call(e, m) && h(a, m, e[m]);
  if (r)
    for (var m of r(e))
      A.call(e, m) && h(a, m, e[m]);
  return a;
};
var i = (a, e) => {
  var m = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && A.call(a, t) && (m[t] = a[t]);
  return m;
};
import l, { forwardRef as V } from "react";
import n from "../../lib/OptiBase.mjs";
const c = V((t, m) => {
  var Z = t, { children: a } = Z, e = i(Z, ["children"]);
  return /* @__PURE__ */ l.createElement(n, L({ ref: m }, e), a, /* @__PURE__ */ l.createElement("path", { d: "M104,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V48A12,12,0,0,0,104,36ZM52,76h56V180H52Zm4-32h48a4,4,0,0,1,4,4V68H52V48A4,4,0,0,1,56,44Zm48,168H56a4,4,0,0,1-4-4V188h56v20A4,4,0,0,1,104,212Zm123.74-16.62L194.55,37.57a12,12,0,0,0-14.25-9.3L133.49,38.32a12.1,12.1,0,0,0-9.23,14.3l33.19,157.81a12,12,0,0,0,14.25,9.3l46.81-10.06h0A12.08,12.08,0,0,0,227.74,195.38Zm-83.21-85.27,54.63-11.73,15,71.07-54.63,11.74Zm-6.64-31.56,54.64-11.74,5,23.74-54.64,11.73Zm-2.71-32.4L182,36.09a4,4,0,0,1,.84-.09,3.94,3.94,0,0,1,2.14.64,4,4,0,0,1,1.76,2.58L190.88,59,136.24,70.72,132.09,51A4.07,4.07,0,0,1,135.18,46.15Zm81.65,155.7L170,211.91a4,4,0,0,1-3-.55,4,4,0,0,1-1.76-2.58L161.12,189l54.64-11.73L219.91,197A4.07,4.07,0,0,1,216.83,201.85Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
