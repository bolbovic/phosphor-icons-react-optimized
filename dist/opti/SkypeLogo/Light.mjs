var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((m, e) => {
  var c = m, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ A.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M166,152c0,16.54-17.05,30-38,30s-38-13.46-38-30a6,6,0,0,1,12,0c0,9.76,11.91,18,26,18s26-8.24,26-18c0-11.21-10.7-15.1-28.33-20.18-15.89-4.58-33.89-9.77-33.89-27.82,0-17.1,15.57-30,36.22-30,15,0,27.74,6.88,33.34,18a6,6,0,0,1-10.71,5.42C147.08,90.36,138.41,86,128,86c-13.81,0-24.22,7.74-24.22,18,0,8.41,9.52,11.76,25.21,16.29C145.48,125,166,131,166,152Zm64,24a54.06,54.06,0,0,1-54,54,53.43,53.43,0,0,1-30.72-9.59A94.06,94.06,0,0,1,35.59,110.72,53.43,53.43,0,0,1,26,80,54.06,54.06,0,0,1,80,26a53.43,53.43,0,0,1,30.72,9.59A94.06,94.06,0,0,1,220.41,145.28,53.43,53.43,0,0,1,230,176Zm-12,0a41.57,41.57,0,0,0-8.74-25.65,6,6,0,0,1-1.11-4.93,82.09,82.09,0,0,0-97.57-97.57,6,6,0,0,1-4.93-1.11A41.57,41.57,0,0,0,80,38,42,42,0,0,0,38,80a41.57,41.57,0,0,0,8.74,25.65,6,6,0,0,1,1.11,4.93,82.09,82.09,0,0,0,97.57,97.57,5.95,5.95,0,0,1,4.93,1.11A41.57,41.57,0,0,0,176,218,42,42,0,0,0,218,176Z" }));
});
n.displayName = "Light";
export {
  n as Light
};