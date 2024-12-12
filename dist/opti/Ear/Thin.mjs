var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var C = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((c, e) => {
  var m = c, { children: a } = m, t = C(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M212,104a4,4,0,0,1-8,0,76,76,0,0,0-152,0c0,28.4,9.55,37.61,18.79,46.52C79.25,158.67,88,167.11,88,188a40,40,0,0,0,40,40c11.37,0,20.83-4.76,28.92-14.55a4,4,0,0,1,6.16,5.1C153.52,230.13,141.71,236,128,236a48.05,48.05,0,0,1-48-48c0-17.49-6.84-24.09-14.76-31.72C55.28,146.68,44,135.79,44,104a84,84,0,0,1,168,0Zm-36.14,60.54A4,4,0,0,0,170.4,166a12,12,0,0,1-22.4-6c0-10.67,5.44-17.92,11.2-25.6C165.49,126,172,117.33,172,104a44,44,0,0,0-88,0,4,4,0,0,0,8,0,36,36,0,0,1,72,0c0,10.67-5.44,17.92-11.2,25.6C146.51,138,140,146.67,140,160a20,20,0,0,0,37.32,10A4,4,0,0,0,175.86,164.54Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
