var p = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var V = (a, h, e) => h in a ? p(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, H = (a, h) => {
  for (var e in h || (h = {}))
    o.call(h, e) && V(a, e, h[e]);
  if (m)
    for (var e of m(h))
      v.call(h, e) && V(a, e, h[e]);
  return a;
};
var c = (a, h) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      h.indexOf(t) < 0 && v.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as n } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = n((t, e) => {
  var r = t, { children: a } = r, h = c(r, ["children"]);
  return /* @__PURE__ */ i.createElement(s, H({ ref: e }, h), a, /* @__PURE__ */ i.createElement("path", { d: "M44,180c0,13.23,9,24,20,24a18.15,18.15,0,0,0,13.11-5.9,4,4,0,1,1,5.78,5.54A26.11,26.11,0,0,1,64,212c-15.44,0-28-14.36-28-32s12.56-32,28-32a26.11,26.11,0,0,1,18.89,8.36,4,4,0,1,1-5.78,5.54A18.15,18.15,0,0,0,64,156C53,156,44,166.77,44,180ZM212,88V224a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm8,80v24h12a4,4,0,0,1,0,8H164v12a4,4,0,0,1-8,0V196H132v12a4,4,0,0,1-8,0V196H112a4,4,0,0,1,0-8h12V164H112a4,4,0,0,1,0-8h12V144a4,4,0,0,1,8,0v12h24V144a4,4,0,0,1,8,0v12h12a4,4,0,0,1,0,8Zm-8,0H132v24h24Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
