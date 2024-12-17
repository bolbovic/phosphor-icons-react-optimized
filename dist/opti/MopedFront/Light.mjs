var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, v({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,42H165.52a38,38,0,0,0-75,0H48a6,6,0,0,0,0,12H90.48a38,38,0,0,0,14.71,24.37A62.09,62.09,0,0,0,66,136v64a14,14,0,0,0,14,14H98v2a30,30,0,0,0,60,0v-2h18a14,14,0,0,0,14-14V136a62.09,62.09,0,0,0-39.19-57.63A38,38,0,0,0,165.52,54H208a6,6,0,0,0,0-12ZM146,216a18,18,0,0,1-36,0V168a18,18,0,0,1,36,0Zm32-80v64a2,2,0,0,1-2,2H158V168a30,30,0,0,0-60,0v34H80a2,2,0,0,1-2-2V136a50,50,0,0,1,100,0ZM128,74a26,26,0,1,1,26-26A26,26,0,0,1,128,74Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
