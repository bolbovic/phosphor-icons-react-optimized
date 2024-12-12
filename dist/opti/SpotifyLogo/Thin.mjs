var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, n = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      A.call(m, e) && i(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var o = t, { children: a } = o, m = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm27.54-52.13a4,4,0,0,1-5.41,1.67,46.73,46.73,0,0,0-44.26,0A4.07,4.07,0,0,1,104,170a4,4,0,0,1-1.87-7.54,55.39,55.39,0,0,1,51.74,0A4,4,0,0,1,155.54,167.87Zm32-56a4,4,0,0,1-5.41,1.65,114.67,114.67,0,0,0-108.24,0,4,4,0,0,1-3.76-7.06,122.65,122.65,0,0,1,115.76,0A4,4,0,0,1,187.53,111.87Zm-16,28a4,4,0,0,1-5.41,1.65,81,81,0,0,0-76.24,0,4,4,0,0,1-3.76-7.06,89,89,0,0,1,83.76,0A4,4,0,0,1,171.53,139.88Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
