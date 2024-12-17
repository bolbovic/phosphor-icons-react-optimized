var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const g = l((r, e) => {
  var c = r, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ d.createElement(n, s({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M190,96c0,28-24.62,51.11-56,53.75V160a6,6,0,0,1-12,0V144a6,6,0,0,1,6-6c27.57,0,50-18.84,50-42s-22.43-42-50-42S78,72.84,78,96a6,6,0,0,1-12,0c0-29.78,27.81-54,62-54S190,66.22,190,96Zm-62,98a14,14,0,1,0,14,14A14,14,0,0,0,128,194Z" }));
});
g.displayName = "Light";
export {
  g as Light
};
