var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var H in a)
    V.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && l.call(a, H) && (e[H] = a[H]);
  return e;
};
import h, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((H, e) => {
  var r = H, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ h.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07L93.6,108H24a12,12,0,0,0,0,24H52v24H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20H76V132h39.42l83.7,92.07a12,12,0,0,0,17.76-16.14ZM76,204H52V180H76ZM92,42.14V40a20,20,0,0,1,20-20h32a20,20,0,0,1,20,20V72a20,20,0,0,1-20,20h-5.58a12,12,0,1,1,0-24H140V44H115.86A12,12,0,0,1,92,42.14ZM244,120a12,12,0,0,1-12,12H204v6.94a12,12,0,0,1-24,0V132h-5.21a12,12,0,1,1,0-24H232A12,12,0,0,1,244,120Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
