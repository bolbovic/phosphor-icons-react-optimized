var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      s.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && s.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as l } from "react";
import A from "../../lib/OptiBase.mjs";
const d = l((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M211.28,199a30,30,0,1,0-38.56,0,38.09,38.09,0,0,0-18.52,23.5,6,6,0,0,0,4.26,7.34,6.26,6.26,0,0,0,1.54.2,6,6,0,0,0,5.8-4.46C168.86,214,179.63,206,192,206s23.14,8,26.2,19.54a6,6,0,0,0,11.6-3.08A38.09,38.09,0,0,0,211.28,199ZM192,158a18,18,0,1,1-18,18A18,18,0,0,1,192,158Zm38-70v32a6,6,0,0,1-12,0V88a2,2,0,0,0-2-2H130.67a14,14,0,0,1-8.4-2.8L94.53,62.4a2,2,0,0,0-1.2-.4H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2h80a6,6,0,0,1,0,12H40a14,14,0,0,1-14-14V64A14,14,0,0,1,40,50H93.33a14,14,0,0,1,8.4,2.8l27.74,20.8a2,2,0,0,0,1.2.4H216A14,14,0,0,1,230,88Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
