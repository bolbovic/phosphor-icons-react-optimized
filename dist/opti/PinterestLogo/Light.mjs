var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (c)
    for (var t of c(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const A = h((r, t) => {
  var m = r, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, l({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M222,112c0,22.05-7.7,42.19-21.68,56.73C187.32,182.25,169.71,190,152,190c-19.42,0-31.55-7.07-38.63-13.64l-11.53,49A6,6,0,0,1,96,230a5.89,5.89,0,0,1-1.37-.16,6,6,0,0,1-4.47-7.21l32-136a6,6,0,1,1,11.68,2.74L116.75,162c2.8,4.33,12.46,16,35.25,16,28.51,0,58-24.69,58-66A74,74,0,1,0,71.9,149a6,6,0,1,1-10.39,6A86,86,0,1,1,222,112Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
