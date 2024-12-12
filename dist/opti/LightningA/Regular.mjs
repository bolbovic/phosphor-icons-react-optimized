var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, s = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      f.call(l, e) && o(a, e, l[e]);
  return a;
};
var L = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && f.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = i((t, e) => {
  var m = t, { children: a } = m, l = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(R, s({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M175.84,111.54a8,8,0,0,0-4.56-5.7l-50-22.43L135,25.85a8,8,0,0,0-13.65-7.28L26.13,121.42a8,8,0,0,0,2.59,12.73l50,22.44L65,214.15a8,8,0,0,0,13.65,7.28l95.2-102.85A8,8,0,0,0,175.84,111.54ZM87.62,188.21l8.16-34.36a8,8,0,0,0-4.5-9.15L45.43,124.12l66.95-72.33-8.16,34.36a8,8,0,0,0,4.5,9.15l45.84,20.58Zm151.53,24.21-36-72a8,8,0,0,0-14.31,0l-36,72a8,8,0,0,0,14.31,7.16L176.94,200h38.11l9.79,19.58A8,8,0,0,0,232,224a8,8,0,0,0,7.15-11.58ZM184.94,184,196,161.89,207.05,184Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
