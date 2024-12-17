var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ H.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M224,48V187.57a4,4,0,0,1-7,2.7L116.8,80H208V48H184v8a8,8,0,0,1-8.52,8A8.18,8.18,0,0,1,168,55.73V48H87.71l-8.46-9.31a4,4,0,0,1,3-6.69H168V24a8,8,0,0,1,8.52-8A8.18,8.18,0,0,1,184,24.27V32h24A16,16,0,0,1,224,48ZM213.92,210.62A8,8,0,0,1,208,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32a8,8,0,0,1,5.93,2.62ZM73.55,80,48,51.89V80Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
