var s = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L69.81,69.93C52.7,94.85,44,119.75,44,144a84,84,0,0,0,145.32,57.4L205,218.69a4,4,0,1,0,5.92-5.38ZM128,220a76.08,76.08,0,0,1-76-76c0-22.1,7.85-44.95,23.33-68L183.92,195.46A75.83,75.83,0,0,1,128,220ZM92.78,47.62A4,4,0,0,1,92.65,42a244.78,244.78,0,0,1,33.06-29.24,4,4,0,0,1,4.58,0A250.18,250.18,0,0,1,171,50.37c26.81,30.84,41,63.21,41,93.63a84.32,84.32,0,0,1-3,22.34,4,4,0,0,1-3.86,2.94,3.86,3.86,0,0,1-1.06-.14,4,4,0,0,1-2.8-4.92A75.89,75.89,0,0,0,204,144c0-62.29-63.08-113.25-76-123A251.38,251.38,0,0,0,98.44,47.48,4,4,0,0,1,92.78,47.62Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
