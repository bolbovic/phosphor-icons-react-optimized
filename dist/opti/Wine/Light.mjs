var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ f.createElement(n, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M203.41,104.23,181.64,30.3a6,6,0,0,0-5.75-4.3H80.11a6,6,0,0,0-5.75,4.3L52.59,104.23a61.48,61.48,0,0,0,16.87,62.65A85.35,85.35,0,0,0,122,189.77V234H88a6,6,0,1,0,0,12h80a6,6,0,1,0,0-12H134V189.77a85.38,85.38,0,0,0,52.54-22.89A61.48,61.48,0,0,0,203.41,104.23ZM84.6,38h86.8l20.51,69.63c.26.9.5,1.8.71,2.7-22.54,9.07-48.17-.73-61.91-7.68C104.1,89.17,83.48,88.34,68.83,91.52Zm93.75,120.11a73.67,73.67,0,0,1-100.7,0,49.53,49.53,0,0,1-13.56-50.48l.74-2.51c12.34-4.46,32.26-6.05,60.46,8.23,11,5.55,28.65,12.64,47.52,12.64A65.56,65.56,0,0,0,194,122.62,49.22,49.22,0,0,1,178.35,158.11Z" }));
});
A.displayName = "Light";
export {
  A as Light
};