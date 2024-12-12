var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ A.createElement(M, L({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M232,128c0,56.63-47.38,104-104,104a103.67,103.67,0,0,1-31.52-4.89,4,4,0,0,1-1.62-6.65L220.46,94.85a4,4,0,0,1,6.65,1.62A103.69,103.69,0,0,1,232,128ZM215.84,72.39a103.16,103.16,0,0,0-6.06-8.56,4,4,0,0,0-6-.33L63.5,203.82a4,4,0,0,0,.33,6,103.16,103.16,0,0,0,8.56,6.06,4,4,0,0,0,5-.54L215.3,77.39A4,4,0,0,0,215.84,72.39ZM192.17,46.22a103.16,103.16,0,0,0-8.56-6.06,4,4,0,0,0-5,.54L40.7,178.62a4,4,0,0,0-.54,5,103.16,103.16,0,0,0,6.06,8.56,4,4,0,0,0,6,.33L192.5,52.18A4,4,0,0,0,192.17,46.22ZM159.53,28.89A103.67,103.67,0,0,0,128,24C71.38,24,24,71.37,24,128a103.69,103.69,0,0,0,4.89,31.53,4,4,0,0,0,6.65,1.62L161.15,35.54A4,4,0,0,0,159.53,28.89Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
