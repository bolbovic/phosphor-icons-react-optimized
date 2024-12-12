var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && h(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && h(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var V = t, { children: a } = V, r = l(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M216,88H152V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V88a16,16,0,0,0,16,16h64v48H72a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V168h64a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88ZM136,216H72V168h64Zm0-176V88H72V40h64Zm80,112H152V104h64Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
