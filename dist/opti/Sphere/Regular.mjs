var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, A = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (c)
    for (var a of c(r))
      l.call(r, a) && o(e, a, r[a]);
  return e;
};
var Z = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && c)
    for (var t of c(e))
      r.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const R = s((t, a) => {
  var m = t, { children: e } = m, r = Z(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, A({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104c0,6-17,16.23-48.77,21.17.51-7,.77-14.08.77-21.17,0-32.24-5.35-64.72-15.74-84.6A88.17,88.17,0,0,1,216,128ZM128,40c8.15,0,24,31.06,24,88,0,8.24-.34,15.92-.93,23.07-7.15.59-14.83.93-23.07.93-56.94,0-88-15.85-88-24A88.1,88.1,0,0,1,128,40ZM43.4,152.26C63.28,162.65,95.76,168,128,168c7.09,0,14.19-.26,21.17-.77C144.23,199,134,216,128,216A88.17,88.17,0,0,1,43.4,152.26ZM152.26,212.6c6.29-12,10.73-28.67,13.26-47.08,18.41-2.53,35-7,47.08-13.26A88.4,88.4,0,0,1,152.26,212.6Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
