var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && v.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var H = r, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ l.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M251.33,123l-48-32A6,6,0,0,0,194,96v26H70V72a2,2,0,0,1,2-2h34.6a30,30,0,1,0,0-12H72A14,14,0,0,0,58,72v50H8a6,6,0,0,0,0,12H58v50a14,14,0,0,0,14,14h34v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H120a14,14,0,0,0-14,14v10H72a2,2,0,0,1-2-2V134H194v26a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM136,46a18,18,0,1,1-18,18A18,18,0,0,1,136,46ZM118,176a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H120a2,2,0,0,1-2-2Zm88-27.21V107.21L237.18,128Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
