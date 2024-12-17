var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ V.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M124.4,84.8,94.53,62.4a2,2,0,0,0-1.2-.4H40a2,2,0,0,0-2,2V80a6,6,0,0,1-12,0V64A14,14,0,0,1,40,50H93.33a14,14,0,0,1,8.4,2.8L131.6,75.2a6,6,0,0,1-7.2,9.6ZM88,202H39.38A1.4,1.4,0,0,1,38,200.62V192a6,6,0,0,0-12,0v8.62A13.39,13.39,0,0,0,39.38,214H88a6,6,0,0,0,0-12Zm72,0H128a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm64-56a6,6,0,0,0-6,6v48.89a1.11,1.11,0,0,1-1.11,1.11H200a6,6,0,0,0,0,12h16.89A13.12,13.12,0,0,0,230,200.89V152A6,6,0,0,0,224,146Zm-8-72H168a6,6,0,0,0,0,12h48a2,2,0,0,1,2,2v24a6,6,0,0,0,12,0V88A14,14,0,0,0,216,74ZM32,158a6,6,0,0,0,6-6V120a6,6,0,0,0-12,0v32A6,6,0,0,0,32,158Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
