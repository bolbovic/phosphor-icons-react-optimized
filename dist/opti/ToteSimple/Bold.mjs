var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && l(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, a) => {
  var m = o, { children: e } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M239,66.75a20.12,20.12,0,0,0-15-6.75H179.83A52,52,0,0,0,76.17,60H32.08A20,20,0,0,0,12.14,82.35l14.25,120A20.06,20.06,0,0,0,46.33,220H209.67a20.06,20.06,0,0,0,19.94-17.65l14.25-120A20,20,0,0,0,239,66.75ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36Zm78.19,160H49.81L36.5,84h183Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};