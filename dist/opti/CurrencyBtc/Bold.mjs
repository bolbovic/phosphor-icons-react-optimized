var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var V = o, { children: a } = V, t = h(V, ["children"]);
  return /* @__PURE__ */ l.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M185.08,114.46A48,48,0,0,0,160,37.52V24a12,12,0,0,0-24,0V36H120V24a12,12,0,0,0-24,0V36H72a12,12,0,0,0,0,24h4V188H72a12,12,0,0,0,0,24H96v12a12,12,0,0,0,24,0V212h16v12a12,12,0,0,0,24,0V212a52,52,0,0,0,25.08-97.54ZM172,84a24,24,0,0,1-24,24H100V60h48A24,24,0,0,1,172,84ZM160,188H100V132h60a28,28,0,0,1,0,56Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
