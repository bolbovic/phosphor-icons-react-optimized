var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && r(e, a, t[a]);
  if (m)
    for (var a of m(t))
      d.call(t, a) && r(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && m)
    for (var l of m(e))
      t.indexOf(l) < 0 && d.call(e, l) && (a[l] = e[l]);
  return a;
};
import i, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = A((l, a) => {
  var o = l, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(L, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M224.11,31.92A68,68,0,0,0,128,31.87l-70.12,69.3A19.91,19.91,0,0,0,52,115.31V187L23.52,215.51a12,12,0,0,0,17,17L69,204H140.7a19.87,19.87,0,0,0,14.15-5.86l.05,0,69.21-70A68.06,68.06,0,0,0,224.11,31.92Zm-79.21,17A44,44,0,0,1,210,108H165l27.52-27.51a12,12,0,0,0-17-17L124,115V69.54ZM76,117l24-23.72V139L76,163Zm63,63H93l48-48h45.5Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
