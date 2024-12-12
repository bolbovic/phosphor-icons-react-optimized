var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var l in a)
    H.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((l, e) => {
  var r = l, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M240,180h-4V61.13l6.51-1.39a12,12,0,1,0-5-23.47l-224,48A12,12,0,0,0,16,108a12.21,12.21,0,0,0,2.53-.26l1.48-.32V180H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,102.27l168-36V180H192V120a12,12,0,0,0-12-12H76a12,12,0,0,0-12,12v60H44ZM168,144H88V132h80ZM88,168h80v12H88Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
