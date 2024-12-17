var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      d.call(l, e) && m(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const L = n((t, e) => {
  var r = t, { children: a } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M225.84,54.16a62,62,0,0,0-87.6-.08L128,63.94l-10.24-9.86a62,62,0,0,0-87.66,87.7l89.35,90.64a12,12,0,0,0,17.1,0l89.29-90.58a62,62,0,0,0,0-87.68Zm-17,70.77-80.81,82-80.87-82a38,38,0,1,1,53.74-53.74l.16.16,9.67,9.31-7,6.76a12,12,0,0,0-.17,17.13L127,128l-7.52,7.51a12,12,0,1,0,17,17l16-16a12,12,0,0,0,0-17L129.13,96.16,155,71.29l.16-.16a38,38,0,1,1,53.68,53.8Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
