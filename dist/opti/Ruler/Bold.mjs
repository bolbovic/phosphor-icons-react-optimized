var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      L.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M238.15,70.54,185.46,17.86a20,20,0,0,0-28.29,0L17.85,157.17a20,20,0,0,0,0,28.29l52.69,52.68a20,20,0,0,0,28.29,0L238.15,98.83A20,20,0,0,0,238.15,70.54ZM84.68,218.34l-47-47L64,145l23.52,23.52a12,12,0,0,0,17-17L81,128l15-15,23.51,23.52a12,12,0,0,0,17-17L113,96l15-15,23.52,23.52a12,12,0,0,0,17-17L145,64l26.35-26.34,47,47Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
