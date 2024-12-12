var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var o = m, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(L, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M182,64V192a6,6,0,0,1-12,0V64a6,6,0,0,1,12,0Zm42-6a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V64A6,6,0,0,0,224,58Zm-82,70a13.77,13.77,0,0,1-6.41,11.65L47.41,195.8A13.91,13.91,0,0,1,26,184.15V71.85A13.91,13.91,0,0,1,47.41,60.2l88.18,56.15A13.77,13.77,0,0,1,142,128Zm-12,0a1.77,1.77,0,0,0-.85-1.53L41,70.32a1.87,1.87,0,0,0-1-.32,2.13,2.13,0,0,0-1,.25,1.76,1.76,0,0,0-1,1.6v112.3a1.76,1.76,0,0,0,1,1.6,1.9,1.9,0,0,0,2-.07l88.19-56.15A1.77,1.77,0,0,0,130,128Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
