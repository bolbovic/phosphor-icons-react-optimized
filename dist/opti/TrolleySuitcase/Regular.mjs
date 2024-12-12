var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? l(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, A = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && H(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && H(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var o = t, { children: a } = o, r = Z(o, ["children"]);
  return /* @__PURE__ */ h.createElement(f, A({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144V72A16,16,0,0,1,88,56h32V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V56h32a16,16,0,0,1,16,16v72a16,16,0,0,1-16,16H88A16,16,0,0,1,72,144Zm64-88h32V40H136ZM88,144H216V72H88Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
