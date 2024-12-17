var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var l = r, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ L.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L56.25,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H198.07l5.49,6a6,6,0,0,0,8.88-8.08Zm53.06,76.2,40.11,44.13A29.67,29.67,0,0,1,128,162a30,30,0,0,1-22.5-49.84ZM48,202a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H67.16l30.23,33.25a42,42,0,0,0,56.33,62L187.16,202ZM230,80V186a6,6,0,0,1-12,0V80a10,10,0,0,0-10-10H176a6,6,0,0,1-5-2.67L156.78,46H99.21l-.23.34a6,6,0,0,1-10-6.65l2-3A6,6,0,0,1,96,34h64a6,6,0,0,1,5,2.67L179.21,58H208A22,22,0,0,1,230,80Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
