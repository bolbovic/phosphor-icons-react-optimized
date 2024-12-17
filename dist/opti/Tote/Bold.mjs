var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const h = i((o, e) => {
  var m = o, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M239,66.75a20.12,20.12,0,0,0-15-6.75H179.83A52,52,0,0,0,76.17,60H32.08A20,20,0,0,0,12.14,82.35l14.25,120A20.06,20.06,0,0,0,46.33,220H209.67a20.06,20.06,0,0,0,19.94-17.65l14.25-120A20,20,0,0,0,239,66.75ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36Zm78.19,160H49.81L36.5,84H76v20a12,12,0,0,0,24,0V84h56v20a12,12,0,0,0,24,0V84h39.5Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
