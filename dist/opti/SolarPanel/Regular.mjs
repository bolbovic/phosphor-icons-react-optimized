var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var H = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, o = (a, l) => {
  for (var e in l || (l = {}))
    r.call(l, e) && H(a, e, l[e]);
  if (m)
    for (var e of m(l))
      M.call(l, e) && H(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var Z in a)
    r.call(a, Z) && l.indexOf(Z) < 0 && (e[Z] = a[Z]);
  if (a != null && m)
    for (var Z of m(a))
      l.indexOf(Z) < 0 && M.call(a, Z) && (e[Z] = a[Z]);
  return e;
};
import p, { forwardRef as s } from "react";
import c from "../../lib/OptiBase.mjs";
const d = s((Z, e) => {
  var t = Z, { children: a } = t, l = A(t, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, l), a, /* @__PURE__ */ p.createElement("path", { d: "M32,104a8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40A8,8,0,0,1,32,104ZM71.43,58.75A8,8,0,0,0,82.75,47.43L71.43,36.12A8,8,0,0,0,60.12,47.43ZM128,40a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V32A8,8,0,0,0,128,40Zm50.91,21.09a8,8,0,0,0,5.66-2.34l11.31-11.32a8,8,0,0,0-11.31-11.31L173.25,47.43a8,8,0,0,0,5.66,13.66ZM192,104a8,8,0,0,0,8,8h16a8,8,0,0,0,0-16H200A8,8,0,0,0,192,104ZM88,112a8,8,0,0,0,8-8,32,32,0,0,1,64,0,8,8,0,0,0,16,0,48,48,0,0,0-96,0A8,8,0,0,0,88,112ZM238.91,220a8,8,0,0,1-6.91,4H24a8,8,0,0,1-7-11.94l40.69-72a8,8,0,0,1,7-4.06H191.3a8,8,0,0,1,7,4.06l40.69,72A8,8,0,0,1,238.91,220Zm-52.27-68H162.27l3.48,16h29.93Zm-37.26,16-3.48-16H110.1l-3.48,16Zm-46.24,16-5.21,24h60.14l-5.21-24ZM60.32,168H90.25l3.48-16H69.36ZM37.71,208H81.55l5.22-24H51.28Zm180.58,0-13.57-24H169.23l5.22,24Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
