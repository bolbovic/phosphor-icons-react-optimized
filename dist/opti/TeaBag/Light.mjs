var h = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const H = l((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224,162a18,18,0,0,1-18-18V64A54,54,0,0,0,98,64V74H76.53a14.07,14.07,0,0,0-12,6.8L44,115a14,14,0,0,0-2,7.21V216a14,14,0,0,0,14,14h96a14,14,0,0,0,14-14V122.22a14,14,0,0,0-2-7.21L143.48,80.8a14.07,14.07,0,0,0-12-6.8H110V64a42,42,0,0,1,84,0v80a30,30,0,0,0,30,30,6,6,0,0,0,0-12ZM131.47,86a2,2,0,0,1,1.72,1l20.53,34.22a2,2,0,0,1,.28,1V216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V122.22a2,2,0,0,1,.29-1L74.81,87a2,2,0,0,1,1.72-1H98v50a6,6,0,0,0,12,0V86Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
