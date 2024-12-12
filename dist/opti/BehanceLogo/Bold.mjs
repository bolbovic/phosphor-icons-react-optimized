var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ A.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M117.82,121.39A42,42,0,0,0,86,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H90a46,46,0,0,0,27.82-82.61ZM44,76H86a18,18,0,0,1,0,36H44ZM90,180H44V136H90a22,22,0,0,1,0,44ZM156,76a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H168A12,12,0,0,1,156,76Zm44,24a52,52,0,0,0,0,104,51.45,51.45,0,0,0,22.7-5.21,12,12,0,1,0-10.49-21.58A27.73,27.73,0,0,1,200,180a28.05,28.05,0,0,1-25.3-16H240a12,12,0,0,0,12-12A52.06,52.06,0,0,0,200,100Zm-25.3,40a28,28,0,0,1,50.6,0Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
