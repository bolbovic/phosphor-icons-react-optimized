var V = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as n } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = n((m, e) => {
  var r = m, { children: a } = r, t = v(r, ["children"]);
  return /* @__PURE__ */ H.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M44,180c0,13.23,9,24,20,24a18.15,18.15,0,0,0,13.11-5.9,4,4,0,1,1,5.78,5.54A26.11,26.11,0,0,1,64,212c-15.44,0-28-14.35-28-32s12.56-32,28-32a26.11,26.11,0,0,1,18.89,8.36,4,4,0,1,1-5.78,5.54A18.15,18.15,0,0,0,64,156C53,156,44,166.77,44,180ZM204,92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88v24a4,4,0,0,1-8,0Zm-48-8h42.34L156,41.65Zm-8,92H132V160a4,4,0,0,0-8,0v16H108a4,4,0,0,0,0,8h16v16a4,4,0,0,0,8,0V184h16a4,4,0,0,0,0-8Zm68,0H200V160a4,4,0,0,0-8,0v16H176a4,4,0,0,0,0,8h16v16a4,4,0,0,0,8,0V184h16a4,4,0,0,0,0-8Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
