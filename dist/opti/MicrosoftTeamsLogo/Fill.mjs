var h = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (A)
    for (var e of A(t))
      H.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && A)
    for (var m of A(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M219.26,80h-7.57A31.71,31.71,0,0,0,216,64a32,32,0,0,0-45.88-28.85A40,40,0,0,0,96.81,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H76.67a64,64,0,0,0,118.7-.15A40,40,0,0,0,232,152V92.74A12.76,12.76,0,0,0,219.26,80ZM136,32a24,24,0,0,1,15.07,42.68A16,16,0,0,0,136,64H113.38A24,24,0,0,1,136,32ZM88,160a8,8,0,0,1-8-8V112H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16H96v40A8,8,0,0,1,88,160Zm96,8a48,48,0,0,1-89.56,24H136a16,16,0,0,0,16-16V96h32Zm0-88H168a39.89,39.89,0,0,0,7.6-29.6A16,16,0,1,1,184,80Zm32,72a24,24,0,0,1-16.36,22.75A62.76,62.76,0,0,0,200,168V96h16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
