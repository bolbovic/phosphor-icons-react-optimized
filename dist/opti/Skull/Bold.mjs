var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M116,132a24,24,0,1,1-24-24A24,24,0,0,1,116,132Zm48-24a24,24,0,1,0,24,24A24,24,0,0,0,164,108Zm72,8c0,29.85-13.05,57.78-36,77.52V216a20,20,0,0,1-20,20H76a20,20,0,0,1-20-20V193.52c-23-19.74-36-47.67-36-77.52C20,58.65,68.45,12,128,12S236,58.65,236,116Zm-24,0c0-44.11-37.68-80-84-80S44,71.89,44,116c0,24.31,11.41,47,31.31,62.3A12,12,0,0,1,80,187.82V212H96V192a12,12,0,0,1,24,0v20h16V192a12,12,0,0,1,24,0v20h16V187.82a12,12,0,0,1,4.69-9.51C200.59,163,212,140.31,212,116Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
