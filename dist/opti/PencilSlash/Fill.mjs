var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (l, e, a) => e in l ? c(l, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[e] = a, p = (l, e) => {
  for (var a in e || (e = {}))
    L.call(e, a) && o(l, a, e[a]);
  if (m)
    for (var a of m(e))
      i.call(e, a) && o(l, a, e[a]);
  return l;
};
var A = (l, e) => {
  var a = {};
  for (var t in l)
    L.call(l, t) && e.indexOf(t) < 0 && (a[t] = l[t]);
  if (l != null && m)
    for (var t of m(l))
      e.indexOf(t) < 0 && i.call(l, t) && (a[t] = l[t]);
  return a;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, a) => {
  var r = t, { children: l } = r, e = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: a }, e), l, /* @__PURE__ */ Z.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38l48.2,53L36.68,152A15.89,15.89,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l50.4-50.39,47.69,52.46a8,8,0,1,0,11.84-10.76Zm47.14,75.64L117,127.74,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188l48.41-48.41,15.89,17.48ZM227.32,96,183,140.34A8,8,0,0,1,171.67,129l14.68-14.68L169.66,97.66,156.31,111A8,8,0,0,1,145,99.69l13.35-13.35h0L141.66,69.66l-12,12a8,8,0,0,1-11.32-11.31L160,28.69a16,16,0,0,1,22.63,0l44.69,44.68A16,16,0,0,1,227.32,96Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
