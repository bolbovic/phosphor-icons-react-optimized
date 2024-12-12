var p = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var h in a)
    o.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && v.call(a, h) && (e[h] = a[h]);
  return e;
};
import i, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const f = s((h, e) => {
  var r = h, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, H({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M46,180c0,12.13,8.07,22,18,22a16.23,16.23,0,0,0,11.67-5.28,6,6,0,0,1,8.66,8.3A28.06,28.06,0,0,1,64,214c-16.54,0-30-15.25-30-34s13.46-34,30-34a28.06,28.06,0,0,1,20.33,9,6,6,0,0,1-8.66,8.3A16.23,16.23,0,0,0,64,158C54.07,158,46,167.87,46,180ZM214,88V224a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm8,84v20h10a6,6,0,0,1,0,12H166v10a6,6,0,0,1-12,0V198H134v10a6,6,0,0,1-12,0V198H112a6,6,0,0,1,0-12h10V166H112a6,6,0,0,1,0-12h10V144a6,6,0,0,1,12,0v10h20V144a6,6,0,0,1,12,0v10h10a6,6,0,0,1,0,12Zm-12,0H134v20h20Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
