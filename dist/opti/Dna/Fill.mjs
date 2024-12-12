var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (A)
    for (var e of A(t))
      V.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && A)
    for (var l of A(a))
      t.indexOf(l) < 0 && V.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(H, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,204.5V232a8,8,0,0,1-16,0V204.5a63.67,63.67,0,0,0-35.38-57.25l-48.4-24.19A79.58,79.58,0,0,1,56,51.5V24a8,8,0,0,1,16,0V51.5a63.67,63.67,0,0,0,35.38,57.25l48.4,24.19A79.58,79.58,0,0,1,200,204.5ZM163.18,192H83.91a8,8,0,0,1-8-8.53A8.18,8.18,0,0,1,84.18,176H149.7a4,4,0,0,0,2.75-6.9,48.24,48.24,0,0,0-11-7.53L94.8,138.23a4,4,0,0,0-4.08.3A79.51,79.51,0,0,0,56,204.5v27.23A8.17,8.17,0,0,0,63.47,240,8,8,0,0,0,72,232V216h92a4,4,0,0,0,4-4v-7.5a48.76,48.76,0,0,0-.9-9.32A4,4,0,0,0,163.18,192ZM191.47,16A8.17,8.17,0,0,0,184,24.27V40H92a4,4,0,0,0-4,4v7.5a48.76,48.76,0,0,0,.9,9.32A4,4,0,0,0,92.82,64h79a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H106.3a4,4,0,0,0-2.75,6.9,48.24,48.24,0,0,0,11,7.53l46.67,23.34a4,4,0,0,0,4.08-.3A79.51,79.51,0,0,0,200,51.5V24A8,8,0,0,0,191.47,16Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
