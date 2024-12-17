var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (c)
    for (var e of c(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && c)
    for (var o of c(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as s } from "react";
import C from "../../lib/OptiBase.mjs";
const H = s((o, e) => {
  var r = o, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ m.createElement(C, A({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M120,176c-44.7,0-43.7-57.87-35.8-104h71.6C163.7,118.13,164.7,176,120,176Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M149.91,13.53A8,8,0,0,0,142.3,8H97.71a8,8,0,0,0-7.61,5.53,451,451,0,0,0-14.21,59.7c-7.26,44.25-4.35,75.76,8.65,93.66A40,40,0,0,0,112,183.42V232H96a8,8,0,1,0,0,16h48a8,8,0,0,0,0-16H128V183.42a39.94,39.94,0,0,0,27.46-16.53c13-17.9,15.92-49.41,8.66-93.66A451,451,0,0,0,149.91,13.53ZM103.59,24h32.83c3.06,10.19,6.77,24.42,9.8,40H93.8C96.83,48.42,100.53,34.19,103.59,24Zm38.93,133.48C137.38,164.56,130,168,120,168s-17.37-3.44-22.51-10.51C85.9,141.54,86.55,110,91,80H149C153.47,110,154.12,141.52,142.52,157.48ZM232,52a12,12,0,1,1-12-12A12,12,0,0,1,232,52ZM184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,208,100Z" }));
});
H.displayName = "Duotone";
export {
  H as Duotone
};
