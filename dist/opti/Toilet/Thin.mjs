var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M116,64a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h16A4,4,0,0,1,116,64Zm52,130.86,3.92,27.44A12,12,0,0,1,160,236H96a12,12,0,0,1-11.88-13.7L88,194.86A92.11,92.11,0,0,1,36,112a4,4,0,0,1,4-4H60V40A12,12,0,0,1,72,28H184a12,12,0,0,1,12,12v68h20a4,4,0,0,1,4,4A92.11,92.11,0,0,1,168,194.86ZM68,108H188V40a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4Zm92.34,90.13a92,92,0,0,1-64.68,0L92,223.43a4,4,0,0,0,.94,3.19A3.93,3.93,0,0,0,96,228h64a3.93,3.93,0,0,0,3-1.38,4,4,0,0,0,.94-3.19ZM211.91,116H44.09a84,84,0,0,0,167.82,0Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
