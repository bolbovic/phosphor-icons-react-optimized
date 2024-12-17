var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M228,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0ZM188,64v36a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V64A20,20,0,0,1,80,44h88A20,20,0,0,1,188,64Zm-24,4H84V96h80Zm24,88v36a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V156a20,20,0,0,1,20-20H168A20,20,0,0,1,188,156Zm-24,4H44v28H164Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
