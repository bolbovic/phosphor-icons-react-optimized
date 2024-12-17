var L = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M110,116a10,10,0,1,1-10-10A10,10,0,0,1,110,116Zm46-10a10,10,0,1,0,10,10A10,10,0,0,0,156,106Zm66,14v96a6,6,0,0,1-9.8,4.64l-25.53-20.89-25.54,20.89a6,6,0,0,1-7.6,0L128,199.75l-25.53,20.89a6,6,0,0,1-7.6,0L69.33,199.75,43.8,220.64A6,6,0,0,1,34,216V120a94,94,0,0,1,188,0Zm-12,0a82,82,0,0,0-164,0v83.34l19.53-16a6,6,0,0,1,7.6,0l25.54,20.89,25.53-20.89a6,6,0,0,1,7.6,0l25.53,20.89,25.54-20.89a6,6,0,0,1,7.6,0l19.53,16Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
