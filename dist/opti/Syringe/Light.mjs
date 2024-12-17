var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var L in a)
    o.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && r)
    for (var L of r(a))
      t.indexOf(L) < 0 && i.call(a, L) && (e[L] = a[L]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((L, e) => {
  var l = L, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M236.24,67.76l-48-48a6,6,0,0,0-8.48,8.48L199.51,48,168,79.51,132.24,43.76a6,6,0,1,0-8.48,8.48L131.51,60,46.1,145.41a13.94,13.94,0,0,0-4.1,9.9v50.2L19.76,227.76a6,6,0,1,0,8.48,8.48L50.49,214h50.2a13.94,13.94,0,0,0,9.9-4.1L196,124.49l7.76,7.75a6,6,0,0,0,8.48-8.48L176.49,88,208,56.49l19.76,19.75a6,6,0,0,0,8.48-8.48ZM102.1,201.41a2,2,0,0,1-1.41.59H54V155.31a2,2,0,0,1,.59-1.41L74,134.49l21.76,21.75a6,6,0,1,0,8.48-8.48L82.49,126,98,110.49l21.76,21.75a6,6,0,0,0,8.48-8.48L106.49,102,140,68.49,187.51,116Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
