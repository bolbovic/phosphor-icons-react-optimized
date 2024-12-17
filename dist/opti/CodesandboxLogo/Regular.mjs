var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    v.call(e, l) && o(a, l, e[l]);
  if (t)
    for (var l of t(e))
      Z.call(e, l) && o(a, l, e[l]);
  return a;
};
var L = (a, e) => {
  var l = {};
  for (var r in a)
    v.call(a, r) && e.indexOf(r) < 0 && (l[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && Z.call(a, r) && (l[r] = a[r]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((r, l) => {
  var m = r, { children: a } = m, e = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
