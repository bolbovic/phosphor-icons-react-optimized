var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ s.createElement(f, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M48.07,100H207.93a12,12,0,0,0,11.8-14.55c-3.39-16-14.56-30.68-31.46-41.23S150.11,28,128,28,84.49,33.76,67.73,44.22,39.66,69.41,36.27,85.45A12,12,0,0,0,48.07,100Zm-4-12.89C50.26,58,86.33,36,128,36s77.74,22,83.91,51.11a4,4,0,0,1-.82,3.39,4,4,0,0,1-3.16,1.5H48.07a4,4,0,0,1-3.16-1.5A4,4,0,0,1,44.09,87.11Zm186.54,69.13-42.56,15.48-38.58-15.43a4,4,0,0,0-3,0L108,171.69l-38.51-15.4a4,4,0,0,0-2.86,0l-44,16A4,4,0,0,0,24,180a4.08,4.08,0,0,0,1.37-.24L44,173v11a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V171.53l21.37-7.77a4,4,0,0,0-2.74-7.52ZM204,184a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V170.07l15.93-5.79,38.58,15.43a4,4,0,0,0,3,0L148,164.31l38.51,15.4a4,4,0,0,0,2.86,0L204,174.44ZM20,128a4,4,0,0,1,4-4H232a4,4,0,0,1,0,8H24A4,4,0,0,1,20,128Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
