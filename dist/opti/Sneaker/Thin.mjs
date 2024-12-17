var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const V = s((l, e) => {
  var A = l, { children: a } = A, t = n(A, ["children"]);
  return /* @__PURE__ */ c.createElement(H, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M227.38,132.91l-60.72-20.24A28,28,0,0,1,150,97.53L126.69,43.12a12,12,0,0,0-15.07-6.4L35.9,64.25A12,12,0,0,0,28,75.53V192a12,12,0,0,0,12,12H240a12,12,0,0,0,12-12V167.06A36,36,0,0,0,227.38,132.91ZM38.63,71.77l75.72-27.53a3.84,3.84,0,0,1,1.37-.24,4,4,0,0,1,3.63,2.32L128.17,67l-25.54,9.29A4,4,0,0,0,104,84a4.12,4.12,0,0,0,1.37-.24l25.95-9.44,7.89,18.44-20.58,7.48A4,4,0,0,0,120,108a4.12,4.12,0,0,0,1.37-.24l21-7.64.25.6a36.11,36.11,0,0,0,13.52,15.7l-21.5,7.82A4,4,0,0,0,136,132a4.12,4.12,0,0,0,1.37-.24l29.3-10.66,58.18,19.4a28,28,0,0,1,19,23.5H36V75.53A4,4,0,0,1,38.63,71.77ZM240,196H40a4,4,0,0,1-4-4V172H244v20A4,4,0,0,1,240,196Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
