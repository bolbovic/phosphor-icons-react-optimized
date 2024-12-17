var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && h(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as Z } from "react";
import V from "../../lib/OptiBase.mjs";
const c = Z((m, e) => {
  var L = m, { children: a } = L, t = i(L, ["children"]);
  return /* @__PURE__ */ p.createElement(V, A({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V216a6,6,0,0,0,8.68,5.37L64,206.71l29.32,14.66a6,6,0,0,0,5.36,0L128,206.71l29.32,14.66a6,6,0,0,0,5.36,0L192,206.71l29.32,14.66A6,6,0,0,0,224,222a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,216V56A14,14,0,0,0,216,42Zm2,164.29-23.32-11.66a6,6,0,0,0-5.36,0L160,209.29l-29.32-14.66a6,6,0,0,0-5.36,0L96,209.29,66.68,194.63a6,6,0,0,0-5.36,0L38,206.29V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM198,112a6,6,0,0,1-6,6H144a6,6,0,0,1,0-12h48A6,6,0,0,1,198,112Zm0,32a6,6,0,0,1-6,6H144a6,6,0,0,1,0-12h48A6,6,0,0,1,198,144ZM112,90H64a6,6,0,0,0-6,6v64a6,6,0,0,0,6,6h48a6,6,0,0,0,6-6V96A6,6,0,0,0,112,90Zm-6,64H70V102h36Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
