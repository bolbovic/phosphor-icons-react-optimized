var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, h = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var s = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const L = f((t, e) => {
  var m = t, { children: a } = m, r = s(m, ["children"]);
  return /* @__PURE__ */ A.createElement(i, h({ ref: e }, r), a, /* @__PURE__ */ A.createElement("path", { d: "M255.66,165.7h0v0a.24.24,0,0,0,0-.08L233.37,91.4A15.89,15.89,0,0,0,218.05,80H208a8,8,0,0,0,0,16h10.05l19.2,64H206L185.37,91.4A15.89,15.89,0,0,0,170.05,80H160a8,8,0,0,0,0,16h10.05l19.2,64H158L137.37,91.4A15.89,15.89,0,0,0,122.05,80H38A15.89,15.89,0,0,0,22.63,91.4L.37,165.6l0,.05v0s0,.05,0,.08A8.1,8.1,0,0,0,0,168a8,8,0,0,0,8,8H248a8,8,0,0,0,7.66-10.3ZM38,96h84.1l19.2,64H18.75Z" }));
});
L.displayName = "Regular";
export {
  L as Regular
};
