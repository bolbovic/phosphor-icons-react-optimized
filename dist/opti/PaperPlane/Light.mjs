var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    L.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var l = r, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M236.17,201.09,140.1,33.16a14,14,0,0,0-24.41,0l-95.88,168a14,14,0,0,0,16.87,20.05L128,190.34l91.33,30.85A14.31,14.31,0,0,0,224,222a14,14,0,0,0,12.13-20.91Zm-10.66,8.18a1.87,1.87,0,0,1-2.2.6l-.1,0L134,179.7V120a6,6,0,0,0-12,0v59.7L32.8,209.83l-.1,0a1.87,1.87,0,0,1-2.2-.6,1.84,1.84,0,0,1-.24-2.22L126.14,39a1.93,1.93,0,0,1,1.74-1,2,2,0,0,1,1.78,1.07L225.73,207A1.86,1.86,0,0,1,225.51,209.27Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
