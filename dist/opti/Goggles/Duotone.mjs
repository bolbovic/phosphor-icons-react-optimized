var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var c in a)
    p.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && Z.call(a, c) && (e[c] = a[c]);
  return e;
};
import m, { forwardRef as l } from "react";
import C from "../../lib/OptiBase.mjs";
const M = l((c, e) => {
  var A = c, { children: a } = A, t = s(A, ["children"]);
  return /* @__PURE__ */ m.createElement(C, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M232,152c0,17.67-30.33,32-48,32a32,32,0,0,1,0-64C201.67,120,232,134.33,232,152ZM72,120c-17.67,0-48,14.33-48,32s30.33,32,48,32a32,32,0,0,0,0-64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M256,136a72.08,72.08,0,0,0-72-72H72A72.08,72.08,0,0,0,0,136a24.06,24.06,0,0,0,17,23c6.06,20.37,37.63,33,55,33a40.07,40.07,0,0,0,39.2-32h33.6A40.07,40.07,0,0,0,184,192c17.33,0,48.9-12.66,55-33A24.06,24.06,0,0,0,256,136ZM45.45,167.74C37,162.76,32,156.88,32,152s4.91-10.61,13.13-15.55l37.21,37.2A23.74,23.74,0,0,1,72,176C64.47,176,53.8,172.68,45.45,167.74Zm48.2-5.4L61,129.7A42.72,42.72,0,0,1,72,128a24,24,0,0,1,24,24A23.74,23.74,0,0,1,93.65,162.34ZM160,152a23.88,23.88,0,0,1,5.46-15.22L201,172.32c-6,2.3-12.15,3.68-17,3.68A24,24,0,0,1,160,152Zm55.63,12.31-35.92-35.92A24.19,24.19,0,0,1,184,128c7.53,0,18.2,3.32,26.55,8.26S224,147.12,224,152C224,155.79,221,160.2,215.63,164.31Zm22.05-22.69C229.34,123.25,200.34,112,184,112a40.07,40.07,0,0,0-39.2,32H111.2A40.07,40.07,0,0,0,72,112c-16.34,0-45.34,11.25-53.68,29.62A8,8,0,0,1,16,136,56.06,56.06,0,0,1,72,80H184a56.06,56.06,0,0,1,56,56A8,8,0,0,1,237.68,141.62Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};