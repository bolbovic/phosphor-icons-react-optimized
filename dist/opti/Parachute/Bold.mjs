var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && r(e, a, t[a]);
  if (l)
    for (var a of l(t))
      h.call(t, a) && r(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var m in e)
    c.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && l)
    for (var m of l(e))
      t.indexOf(m) < 0 && h.call(e, m) && (a[m] = e[m]);
  return a;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, a) => {
  var o = m, { children: e } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ d.createElement(i, p({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M236,120A108.12,108.12,0,0,0,128,12h0A108.12,108.12,0,0,0,20,120a12,12,0,0,0,3.85,8.79l.22.2c.17.15.35.31.54.45l.19.16L116,198v14h-4a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24h-4V198l91.2-68.4h0A12,12,0,0,0,236,120Zm-24.85-12H179.63c-1.79-29.27-10-50.53-18.93-65.36A84.27,84.27,0,0,1,211.15,108Zm-110.73,0C103.15,68.76,119,48.11,128,39.38c9,8.73,24.85,29.38,27.58,68.62ZM95.3,42.64c-9,14.83-17.14,36.09-18.93,65.36H44.85A84.27,84.27,0,0,1,95.3,42.64ZM68,132h48v36Zm72,0h48l-48,36Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
