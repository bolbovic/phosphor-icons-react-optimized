var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (e, c, a) => c in e ? s(e, c, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[c] = a, p = (e, c) => {
  for (var a in c || (c = {}))
    o.call(c, a) && m(e, a, c[a]);
  if (r)
    for (var a of r(c))
      i.call(c, a) && m(e, a, c[a]);
  return e;
};
var V = (e, c) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && c.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      c.indexOf(t) < 0 && i.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const v = d((t, a) => {
  var l = t, { children: e } = l, c = V(l, ["children"]);
  return /* @__PURE__ */ f.createElement(n, p({ ref: a }, c), e, /* @__PURE__ */ f.createElement("path", { d: "M227.32,48.75A8,8,0,0,0,218.76,50c-28,24.22-51.72,12.48-79.21-1.13C111.07,34.76,78.78,18.79,42.76,50h0A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,227.32,48.75ZM56,160.44V109.88c16.85-11.28,32.64-11.59,48-7.34v51.74C88.87,150.47,72.87,150.71,56,160.44ZM104,50.87c9.25,2.83,18.61,7.45,28.45,12.32,11.26,5.57,23.11,11.43,35.55,14.56v51.74c15.35,4.25,31.14,3.94,48-7.35v50.11c-16.87,13.32-32.27,13.72-48,8.91V129.49c-21.62-6-42.38-21-64-26.95Z" }));
});
v.displayName = "Fill";
export {
  v as Fill
};
