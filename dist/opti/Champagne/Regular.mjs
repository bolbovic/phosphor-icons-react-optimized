var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const h = M((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20ZM164.12,73.23c7.26,44.25,4.35,75.76-8.66,93.66A39.94,39.94,0,0,1,128,183.42V232h16a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h16V183.42a40,40,0,0,1-27.46-16.53c-13-17.9-15.91-49.41-8.65-93.66A451,451,0,0,1,90.1,13.53,8,8,0,0,1,97.71,8H142.3a8,8,0,0,1,7.61,5.53A451,451,0,0,1,164.12,73.23ZM93.8,64h52.4c-3-15.58-6.72-29.81-9.78-40H103.59C100.53,34.19,96.83,48.42,93.8,64ZM149,80H91c-4.49,30-5.14,61.54,6.45,77.49C102.63,164.56,110,168,120,168s17.38-3.44,22.52-10.51C154.1,141.54,153.46,110,149,80Zm71-40a12,12,0,1,0,12,12A12,12,0,0,0,220,40ZM196,88a12,12,0,1,0,12,12A12,12,0,0,0,196,88Z" }));
});
h.displayName = "Regular";
export {
  h as Regular,
  h as default
};
