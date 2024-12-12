var h = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var C = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && c)
    for (var m of c(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var r = m, { children: a } = r, t = C(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M164,76a8,8,0,1,1-8-8A8,8,0,0,1,164,76Zm42.77,76.73c-14.5,20-36.17,33.57-64.38,40.2-20.91,4.91-45.61,6-73.8,3.42q2.46,20.18,7.41,42.79a4,4,0,0,1-3,4.77,4.19,4.19,0,0,1-.86.09,4,4,0,0,1-3.9-3.14,457,457,0,0,1-7.72-45.36q-21.4-2.49-45.33-7.72A4,4,0,1,1,16.86,180q22.59,4.95,42.76,7.41c-2.62-28.16-1.48-52.84,3.43-73.73,6.63-28.21,20.14-49.88,40.18-64.39C127.32,31.8,156.61,28,177.53,28h1.71c22,.21,40.12,4.54,41.81,5.53A4,4,0,0,1,222.46,35c1,1.68,5.31,19.8,5.53,41.79C228.2,97.75,224.69,128,206.77,152.73Zm-12.23,2.43a108,108,0,0,1-93.7-93.7c-27.92,25.08-39,67.62-33.14,126.81C126.9,194.14,169.45,183.07,194.54,155.16Zm21.2-114.9C204.9,37.73,148.5,26.69,108.3,55.46a99.92,99.92,0,0,0,92.23,92.24C229.29,107.52,218.27,51.11,215.74,40.26Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
