var A = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const l = Z((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M169.1,54.82A6,6,0,1,0,166.9,43C150.3,46.13,136.65,54.82,128,67.4,117.3,51.5,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,5.93,5.93,0,0,0,5.68,0h0a329.42,329.42,0,0,0,40.82-27,6,6,0,0,0-7.32-9.51A341.88,341.88,0,0,1,134,213.56V81.28C140,67.5,152.76,57.88,169.1,54.82ZM122,213.54C97.4,198.51,30,152.7,30,102A48.05,48.05,0,0,1,78,54c19.87,0,36.62,10.4,44,27.22ZM232.33,102a5,5,0,0,1-.67,0,6,6,0,0,1-5.95-5.34,47.89,47.89,0,0,0-21.05-34.58,6,6,0,1,1,6.68-10,59.85,59.85,0,0,1,26.29,43.23A6,6,0,0,1,232.33,102Zm-3.66,36.72c-5.58,11.2-13.75,22.65-24.26,34a6,6,0,0,1-8.82-8.15c9.75-10.54,17.27-21.05,22.35-31.24a6,6,0,1,1,10.73,5.36Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
