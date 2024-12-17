var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
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
import f, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.51,154.83A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a11.93,11.93,0,0,0,8.48-3.51l88.67-88.67,5.73,23-38.39,38.4a4,4,0,1,0,5.65,5.66l40-40a4,4,0,0,0,1.06-3.8l-7.46-29.8,28.06-28.06A12,12,0,0,0,224.49,76.2ZM44,208V169.66L86.35,212H48A4,4,0,0,1,44,208Zm52,2.34L45.66,160,136,69.66,186.35,120ZM218.83,87.51,192,114.34,141.66,64l26.83-26.83a4,4,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
