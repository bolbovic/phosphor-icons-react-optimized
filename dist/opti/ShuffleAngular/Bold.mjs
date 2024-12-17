var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    H.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && m(a, e, l[e]);
  return a;
};
var L = (a, l) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var r = t, { children: a } = r, l = L(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M240.49,175.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L203,196H168a12,12,0,0,1-9.76-5L81.82,84H32a12,12,0,0,1,0-24H88a12,12,0,0,1,9.76,5l76.42,107H203l-3.52-3.51a12,12,0,0,1,17-17ZM110.4,152.64a12,12,0,0,0-16.74,2.79L81.82,172H32a12,12,0,0,0,0,24H88a12,12,0,0,0,9.76-5l15.43-21.59A12,12,0,0,0,110.4,152.64Zm35.2-49.28a12,12,0,0,0,16.74-2.79L174.18,84H203l-3.52,3.51a12,12,0,0,0,17,17l24-24a12,12,0,0,0,0-17l-24-24a12,12,0,0,0-17,17L203,60H168a12,12,0,0,0-9.76,5l-15.43,21.6A12,12,0,0,0,145.6,103.36Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
