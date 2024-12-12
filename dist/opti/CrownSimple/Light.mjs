var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var m = l, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ A.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M230,75.4a13.87,13.87,0,0,0-16.52,3.34l-35.74,38.52L140.71,34.13a14,14,0,0,0-25.45.07l-37,83.06L42.48,78.74A14,14,0,0,0,18.22,90.46c0,.08,0,.16.05.24L41,194.57A14,14,0,0,0,54.71,206H201.29a14,14,0,0,0,13.76-11.43L237.73,90.7c0-.08,0-.16.05-.24A13.89,13.89,0,0,0,230,75.4ZM226,88.29,203.31,192.11a2,2,0,0,0-.05.24,2,2,0,0,1-2,1.65H54.71a2,2,0,0,1-2-1.65,2,2,0,0,0-.05-.24L30,88.29a1.82,1.82,0,0,1,1.12-2.06,1.84,1.84,0,0,1,2.36.48l.12.13,42,45.24a6,6,0,0,0,9.88-1.64l40.7-91.28A1.92,1.92,0,0,1,128,38a1.87,1.87,0,0,1,1.78,1.09l40.74,91.35a6,6,0,0,0,9.88,1.64l42-45.24.12-.13a1.84,1.84,0,0,1,2.36-.48A1.82,1.82,0,0,1,226,88.29Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
