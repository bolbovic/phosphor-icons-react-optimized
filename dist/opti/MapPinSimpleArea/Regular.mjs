var R = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? R(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, s = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (c)
    for (var e of c(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const M = d((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, s({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M120,103.2V176a8,8,0,0,0,16,0V103.2a40,40,0,1,0-16,0ZM128,40a24,24,0,1,1-24,24A24,24,0,0,1,128,40ZM240,176c0,31.18-57.71,48-112,48S16,207.18,16,176c0-7.74,3.81-19.13,22-29.41,12.26-6.94,29.12-12.27,48.77-15.42A8,8,0,1,1,89.27,147c-17.54,2.82-33,7.63-43.42,13.55C37.05,165.5,32,171.14,32,176c0,13.36,36.52,32,96,32s96-18.64,96-32c0-4.86-5.05-10.5-13.85-15.49-10.46-5.92-25.88-10.73-43.42-13.55a8,8,0,1,1,2.54-15.79c19.65,3.15,36.51,8.48,48.77,15.42C236.19,156.87,240,168.26,240,176Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
