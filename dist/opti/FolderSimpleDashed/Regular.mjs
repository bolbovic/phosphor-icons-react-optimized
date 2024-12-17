var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? V(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && H(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && H(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((t, e) => {
  var o = t, { children: a } = o, r = l(o, ["children"]);
  return /* @__PURE__ */ v.createElement(f, Z({ ref: e }, r), a, /* @__PURE__ */ v.createElement("path", { d: "M24,80V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L132.8,73.6a8,8,0,1,1-9.6,12.8L93.33,64H40V80a8,8,0,0,1-16,0ZM88,200H40v-8a8,8,0,0,0-16,0v8.62A15.4,15.4,0,0,0,39.38,216H88a8,8,0,0,0,0-16Zm72,0H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm64-56a8,8,0,0,0-8,8v48H200a8,8,0,0,0,0,16h16.89A15.13,15.13,0,0,0,232,200.89V152A8,8,0,0,0,224,144Zm-8-72H168a8,8,0,0,0,0,16h48v24a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM32,160a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v32A8,8,0,0,0,32,160Z" }));
});
h.displayName = "Regular";
export {
  h as Regular
};
