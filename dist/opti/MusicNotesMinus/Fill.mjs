var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && c(e, a, t[a]);
  if (l)
    for (var a of l(t))
      i.call(t, a) && c(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var r in e)
    o.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && i.call(e, r) && (a[r] = e[r]);
  return a;
};
import m, { forwardRef as n } from "react";
import f from "../../lib/OptiBase.mjs";
const s = n((r, a) => {
  var p = r, { children: e } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(f, A({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M224,40H176a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" }), /* @__PURE__ */ m.createElement("path", { d: "M162.13,76.5a31.57,31.57,0,0,1-16.44-38.76A4,4,0,0,0,141,32.53L78.06,48.25A8,8,0,0,0,72,56V166.1A36,36,0,1,0,52.42,232C72.25,231.77,88,215.13,88,195.3V102.25l73.26-18.31A4,4,0,0,0,162.13,76.5Z" }), /* @__PURE__ */ m.createElement("path", { d: "M212,80h-8a4,4,0,0,0-4,4v50.1A36,36,0,1,0,180.42,200c19.83-.23,35.58-16.86,35.58-36.7V84A4,4,0,0,0,212,80Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
