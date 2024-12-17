var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
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
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const H = d((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,112a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,112Zm72,104H77.16L197.29,110a8.17,8.17,0,0,0,1.1-1.19,8.07,8.07,0,0,0,1.61-5.08A8,8,0,0,0,186.71,98l-24.54,21.65A80,80,0,0,0,49,179.25a8.33,8.33,0,0,0-.1,1.1L48,223.83A8,8,0,0,0,56,232H200a8,8,0,0,0,0-16Zm-11.88-73a8,8,0,0,0-6.25,1.94L119.47,200H200a8,8,0,0,0,8-8,79.6,79.6,0,0,0-14.27-45.62A8,8,0,0,0,188.12,143Z" }));
});
H.displayName = "Fill";
export {
  H as Fill
};
