var c = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    o.call(a, t) && m(e, t, a[t]);
  if (L)
    for (var t of L(a))
      i.call(a, t) && m(e, t, a[t]);
  return e;
};
var A = (e, a) => {
  var t = {};
  for (var r in e)
    o.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && L)
    for (var r of L(e))
      a.indexOf(r) < 0 && i.call(e, r) && (t[r] = e[r]);
  return t;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, t) => {
  var l = r, { children: e } = l, a = A(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, p({ ref: t }, a), e, /* @__PURE__ */ Z.createElement("path", { d: "M228.21,117.61,208.32,41.49a9.94,9.94,0,0,0-19-.93L171.17,90H84.83L66.66,40.56a9.94,9.94,0,0,0-19,.93L27.79,117.61A55.18,55.18,0,0,0,49,176.42l73.27,51.77a9.94,9.94,0,0,0,11.44,0L207,176.42A55.18,55.18,0,0,0,228.21,117.61ZM57.65,50.82,75,98.07A6,6,0,0,0,80.64,102h94.72A6,6,0,0,0,181,98.07l17.36-47.25,15,57.52L128,168.66,42.62,108.34ZM39.38,120.74,117.6,176,93.41,193.1,55.94,166.62A43.1,43.1,0,0,1,39.38,120.74ZM128,217.53l-24.19-17.09L128,183.35l24.19,17.09Zm72.06-50.91L162.59,193.1,138.4,176l78.22-55.26A43.1,43.1,0,0,1,200.06,166.62Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
