var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    h.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var o = l, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ d.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M127,104.73l-24,56a12,12,0,0,1-22.06,0l-24-56A12,12,0,0,1,79,95.27l13,30.27,13-30.27A12,12,0,0,1,127,104.73ZM256,128a84.09,84.09,0,0,1-84,84H84A84,84,0,0,1,84,44h88A84.09,84.09,0,0,1,256,128Zm-24,0a60.07,60.07,0,0,0-60-60H84a60,60,0,0,0,0,120h88A60.07,60.07,0,0,0,232,128Zm-32-8a31.85,31.85,0,0,1-7.93,21.05l5.69,8A12,12,0,1,1,178.24,163l-7.91-11.06c-.77.05-1.55.09-2.33.09h-8v4a12,12,0,0,1-24,0V100a12,12,0,0,1,12-12h20A32,32,0,0,1,200,120Zm-40,8h8a8,8,0,0,0,0-16h-8Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
