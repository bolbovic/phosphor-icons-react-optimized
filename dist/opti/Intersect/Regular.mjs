var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, A = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && l(e, a, r[a]);
  if (m)
    for (var a of m(r))
      Z.call(r, a) && l(e, a, r[a]);
  return e;
};
var M = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && Z.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, a) => {
  var o = t, { children: e } = o, r = M(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: a }, r), e, /* @__PURE__ */ c.createElement("path", { d: "M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM100.69,136,120,155.31A63.48,63.48,0,0,1,96,160,63.48,63.48,0,0,1,100.69,136Zm33.75,11.13-25.57-25.57a64.65,64.65,0,0,1,12.69-12.69l25.57,25.57A64.65,64.65,0,0,1,134.44,147.13ZM155.31,120,136,100.69A63.48,63.48,0,0,1,160,96,63.48,63.48,0,0,1,155.31,120ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96ZM160,224A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
