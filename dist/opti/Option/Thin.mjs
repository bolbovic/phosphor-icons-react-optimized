var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const d = l((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228,192a4,4,0,0,1-4,4H160.94a11.94,11.94,0,0,1-10.73-6.63L98.63,86.21A4,4,0,0,0,95.06,84H32a4,4,0,0,1,0-8H95.06a11.94,11.94,0,0,1,10.73,6.63l51.58,103.16a4,4,0,0,0,3.57,2.21H224A4,4,0,0,1,228,192ZM152,84h72a4,4,0,0,0,0-8H152a4,4,0,0,0,0,8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
