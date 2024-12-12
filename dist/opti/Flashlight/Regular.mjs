var i = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && o(a, e, r[e]);
  if (V)
    for (var e of V(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = s((t, e) => {
  var m = t, { children: a } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(R, H({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M184,16H72A16,16,0,0,0,56,32V77.33a16.12,16.12,0,0,0,3.2,9.6L80,114.67V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V114.67l20.8-27.74a16.12,16.12,0,0,0,3.2-9.6V32A16,16,0,0,0,184,16ZM72,32H184V56H72V32Zm91.2,73.07a16.12,16.12,0,0,0-3.2,9.6V224H96V114.67a16.12,16.12,0,0,0-3.2-9.6L72,77.33V72H184v5.33ZM136,120v32a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
