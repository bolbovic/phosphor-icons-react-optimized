var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var l = t, { children: a } = l, r = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(R, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M232,48a8,8,0,0,1-8,8H208V72a8,8,0,0,1-16,0V56H176a8,8,0,0,1,0-16h16V24a8,8,0,0,1,16,0V40h16A8,8,0,0,1,232,48Zm-16,64v52a36,36,0,1,1-16-29.92V112a8,8,0,0,1,16,0Zm-16,52a20,20,0,1,0-20,20A20,20,0,0,0,200,164ZM88,110.25V196a36,36,0,1,1-16-29.92V56a8,8,0,0,1,6.06-7.76l56-14a8,8,0,0,1,3.88,15.52L88,62.25v31.5l70.06-17.51a8,8,0,0,1,3.88,15.52ZM72,196a20,20,0,1,0-20,20A20,20,0,0,0,72,196Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
