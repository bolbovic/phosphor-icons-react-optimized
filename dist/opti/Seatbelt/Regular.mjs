var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && l(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M172,68a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,68ZM128,96a28,28,0,1,1,28-28A28,28,0,0,1,128,96Zm80,128a8,8,0,0,1-8,8H56a8,8,0,0,1-5.29-14l98.07-86.54a64,64,0,0,0-84,50.33A8,8,0,0,1,49,179.25a80,80,0,0,1,113.16-59.59L186.71,98a8,8,0,0,1,10.58,12L77.16,216H200A8,8,0,0,1,208,224Zm-14.27-77.62A79.6,79.6,0,0,1,208,192a8,8,0,0,1-16,0,63.67,63.67,0,0,0-11.41-36.49,8,8,0,0,1,13.14-9.13Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
