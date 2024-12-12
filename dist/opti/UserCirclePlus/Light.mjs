var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M170,56a6,6,0,0,1,6-6h18V32a6,6,0,0,1,12,0V50h18a6,6,0,0,1,0,12H206V80a6,6,0,0,1-12,0V62H176A6,6,0,0,1,170,56Zm58.59,55A101.9,101.9,0,1,1,145,27.41a6,6,0,1,1-2,11.83A91.66,91.66,0,0,0,128,38,89.95,89.95,0,0,0,62.49,189.64a77.53,77.53,0,0,1,40-31.38,46,46,0,1,1,51,0,77.53,77.53,0,0,1,40,31.38A89.65,89.65,0,0,0,218,128a91.76,91.76,0,0,0-1.24-15,6,6,0,1,1,11.83-2ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Zm0,64A89.58,89.58,0,0,0,184.56,198a66,66,0,0,0-113.12,0A89.58,89.58,0,0,0,128,218Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
