var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = L(h, ["children"]);
  return /* @__PURE__ */ l.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M110,72a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12h64A6,6,0,0,1,110,72Zm-6,106H78V152a6,6,0,0,0-12,0v26H40a6,6,0,0,0,0,12H66v26a6,6,0,0,0,12,0V190h26a6,6,0,0,0,0-12Zm48-4h64a6,6,0,0,0,0-12H152a6,6,0,0,0,0,12Zm64,20H152a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm-60.24-93.76a6,6,0,0,0,8.48,0L184,80.49l19.76,19.75a6,6,0,0,0,8.48-8.48L192.49,72l19.75-19.76a6,6,0,0,0-8.48-8.48L184,63.51,164.24,43.76a6,6,0,0,0-8.48,8.48L175.51,72,155.76,91.76A6,6,0,0,0,155.76,100.24Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
