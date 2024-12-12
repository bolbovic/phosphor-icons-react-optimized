var C = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? C(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var h = (e, a) => {
  var t = {};
  for (var c in e)
    i.call(e, c) && a.indexOf(c) < 0 && (t[c] = e[c]);
  if (e != null && r)
    for (var c of r(e))
      a.indexOf(c) < 0 && p.call(e, c) && (t[c] = e[c]);
  return t;
};
import s, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((c, t) => {
  var m = c, { children: e } = m, a = h(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, f({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M186.61,33.84c-18.45-7.54-40.41-9.74-61.84-6.17-23,3.82-42.93,13.72-57.58,28.62C56.31,67.36,43.13,88.94,42.06,128.94c-.69,26.23,4.34,54.87,13.46,76.62,8.77,20.92,20.13,32.44,32,32.44,21.72,0,31.72-19.53,41.39-38.41,7.08-13.82,14.4-28.11,26.21-36.12h0c6-4.11,14.09-7.21,22.61-10.5C201,144,230,132.81,230,93.17,230,66.75,214.19,45.13,186.61,33.84Zm-13.2,107.94c-9.17,3.54-17.84,6.88-25,11.76-14.36,9.73-22.75,26.12-30.15,40.58C109.47,211.23,101.9,226,87.52,226c-5,0-13.18-6.59-20.94-25.08-8.49-20.26-13.17-47-12.52-71.66.75-28.16,8.45-51.09,21.69-64.55,18.45-18.78,44.57-26.65,68.86-26.65A100.32,100.32,0,0,1,182.07,45C213.33,57.74,218,80.65,218,93.17,218,124.58,196.34,132.93,173.41,141.78Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
