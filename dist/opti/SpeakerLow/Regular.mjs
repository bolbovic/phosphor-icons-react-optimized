var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? A(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (l)
    for (var a of l(r))
      c.call(r, a) && o(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      r.indexOf(t) < 0 && c.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as H } from "react";
import M from "../../lib/OptiBase.mjs";
const R = H((t, a) => {
  var m = t, { children: e } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(M, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55ZM208,128a39.93,39.93,0,0,1-10,26.46,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.58A40,40,0,0,1,208,128Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
