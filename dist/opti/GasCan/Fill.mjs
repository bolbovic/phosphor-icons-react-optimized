var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as M } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = M((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M200,24H123.31A15.86,15.86,0,0,0,112,28.69L101.66,39,91.31,28.69a16,16,0,0,0-22.62,0l-24,24a16,16,0,0,0,0,22.62L55,85.66,44.69,96A15.86,15.86,0,0,0,40,107.31V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM56,64,80,40,90.34,50.34l-24,24ZM180.8,185.6a8,8,0,1,1-9.6,12.8L128,166,84.8,198.4a8,8,0,0,1-9.6-12.8L114.67,156,75.2,126.4a8,8,0,0,1,9.6-12.8L128,146l43.2-32.4a8,8,0,0,1,9.6,12.8L141.33,156ZM176,72H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
