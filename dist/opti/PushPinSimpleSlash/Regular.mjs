var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const n = i((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M83.25,40a8,8,0,0,1,8-8H192a8,8,0,0,1,0,16h-6.46l18.75,106.3a8,8,0,0,1-6.48,9.26,7.52,7.52,0,0,1-1.4.13,8,8,0,0,1-7.87-6.61L169.29,48h-78A8,8,0,0,1,83.25,40ZM213.38,221.92a8,8,0,0,1-11.3-.54L168.1,184H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L66.24,72,42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM153.55,168,79.84,86.92,65.54,168Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
