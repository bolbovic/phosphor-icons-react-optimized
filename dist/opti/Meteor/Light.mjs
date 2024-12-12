var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M96,122a38,38,0,1,0,38,38A38,38,0,0,0,96,122Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,96,186Zm124.24-62.24a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48-8.48l48-48A6,6,0,0,1,220.24,123.76Zm-56,8.48a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,8.48Zm64-64-16,16a6,6,0,0,1-8.48-8.48l16-16a6,6,0,0,1,8.48,8.48ZM123.76,91.76l72-72a6,6,0,0,1,8.48,8.48l-72,72a6,6,0,1,1-8.48-8.48ZM145.5,201a6,6,0,0,1,0,8.49,70,70,0,0,1-99-99l82.75-82.74a6,6,0,1,1,8.48,8.48L55,119a58,58,0,1,0,82,82A6,6,0,0,1,145.5,201Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
