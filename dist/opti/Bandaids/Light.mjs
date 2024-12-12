var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && Z.call(a, l) && (e[l] = a[l]);
  return e;
};
import M, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ M.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ M.createElement("path", { d: "M181.74,128l29.13-29.13a38,38,0,1,0-53.74-53.74L128,74.26,98.87,45.13A38,38,0,1,0,45.13,98.87L74.26,128,45.13,157.13a38,38,0,1,0,53.74,53.74L128,181.74l29.13,29.13a38,38,0,1,0,53.74-53.74ZM165.62,53.62h0a26,26,0,1,1,36.76,36.77l-29.13,29.13L136.49,82.75ZM164.77,128,128,164.77,91.23,128,128,91.23ZM53.62,90.38A26,26,0,1,1,90.38,53.62l29.13,29.13L82.75,119.52Zm36.76,112a26,26,0,1,1-36.76-36.76l29.13-29.13,36.76,36.76Zm112,0a26,26,0,0,1-36.76,0l-29.14-29.13,36.77-36.77,29.13,29.14a26,26,0,0,1,0,36.76ZM118,128a10,10,0,1,1,10,10A10,10,0,0,1,118,128Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
