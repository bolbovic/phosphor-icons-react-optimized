var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const h = i((o, e) => {
  var l = o, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M243.86,197.65l-14.25-120A20.06,20.06,0,0,0,209.67,60H179.83A52,52,0,0,0,76.17,60H46.33A20.06,20.06,0,0,0,26.39,77.65l-14.25,120A20,20,0,0,0,32.08,220H223.92a20,20,0,0,0,19.94-22.35ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36ZM36.5,196,49.81,84H76v20a12,12,0,0,0,24,0V84h56v20a12,12,0,0,0,24,0V84h26.19L219.5,196Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
