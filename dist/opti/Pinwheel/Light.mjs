var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((r, e) => {
  var o = r, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M228.24,219.76,177.38,168.9a60.19,60.19,0,0,0,6.45-1.92,58,58,0,0,0,34.66-74.34,6,6,0,0,0-7.69-3.58L161.5,107a60.16,60.16,0,0,0,3.54-6.46,58,58,0,0,0-72.4-79,6,6,0,0,0-3.58,7.69L107,78.52A60.16,60.16,0,0,0,100.54,75a58,58,0,0,0-79,72.4,6,6,0,0,0,3.1,3.38,6,6,0,0,0,4.59.2L78.52,133A58.3,58.3,0,0,0,75,139.48,58.06,58.06,0,0,0,127.5,222a58.25,58.25,0,0,0,19.88-3.53A6,6,0,0,0,151,210.8L133,161.5A57.8,57.8,0,0,0,162,170.45l57.79,57.79a6,6,0,0,0,8.48-8.48ZM102.52,31.11a46,46,0,0,1,31.2,85.72ZM31.11,137.5a46,46,0,0,1,85.72-31.2ZM137.5,208.9a46,46,0,0,1-31.2-85.72Zm26.95-50.41a46.07,46.07,0,0,1-41.27-24.77l85.72-31.2a46.06,46.06,0,0,1-44.39,56Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
