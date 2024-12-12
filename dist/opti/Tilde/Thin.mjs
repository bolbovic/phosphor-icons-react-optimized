var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (c)
    for (var a of c(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const E = h((r, a) => {
  var m = r, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M219.12,128.09c-13.82,17.18-27.26,26.24-41.11,27.7a38.9,38.9,0,0,1-4,.21c-18,0-33.48-12.64-48.53-24.9-15.57-12.68-30.29-24.66-46.64-22.93-11.62,1.22-23.3,9.32-35.71,24.76a4,4,0,0,1-6.24-5C50.7,110.73,64.14,101.67,78,100.21c19.67-2.08,36.38,11.53,52.54,24.69,15.57,12.68,30.29,24.66,46.64,22.93,11.62-1.22,23.3-9.32,35.71-24.76a4,4,0,1,1,6.24,5Z" }));
});
E.displayName = "Thin";
export {
  E as Thin
};
