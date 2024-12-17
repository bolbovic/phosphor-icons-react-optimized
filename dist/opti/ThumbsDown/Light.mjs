var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M237.83,157.27l-12-96A22,22,0,0,0,204,42H32A14,14,0,0,0,18,56v88a14,14,0,0,0,14,14H76.29l38.34,76.68A6,6,0,0,0,120,238a38,38,0,0,0,38-38V182h58a22,22,0,0,0,21.83-24.73ZM74,146H32a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H74Zm149.5,20.62A9.89,9.89,0,0,1,216,170H152a6,6,0,0,0-6,6v24a26,26,0,0,1-22.42,25.75L86,150.58V54H204a10,10,0,0,1,9.92,8.76l12,96A9.89,9.89,0,0,1,223.5,166.62Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
