var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && m(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var H in a)
    h.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && l.call(a, H) && (e[H] = a[H]);
  return e;
};
import p, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const f = v((H, e) => {
  var V = H, { children: a } = V, t = i(V, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M232,114H134V86h10a14,14,0,0,0,14-14V40a14,14,0,0,0-14-14H112A14,14,0,0,0,98,40V72a14,14,0,0,0,14,14h10v28H24a6,6,0,0,0,0,12H58v36H48a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H70V126H186v18a6,6,0,0,0,12,0V126h34a6,6,0,0,0,0-12ZM110,72V40a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V72a2,2,0,0,1-2,2H112A2,2,0,0,1,110,72ZM82,176v32a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H80A2,2,0,0,1,82,176Zm138.24-3.76L200.48,192l19.76,19.76a6,6,0,1,1-8.48,8.48L192,200.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L183.52,192l-19.76-19.76a6,6,0,0,1,8.48-8.48L192,183.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
