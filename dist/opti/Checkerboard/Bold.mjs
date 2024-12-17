var M = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, V = (e, t) => {
  for (var a in t || (t = {}))
    Z.call(t, a) && r(e, a, t[a]);
  if (l)
    for (var a of l(t))
      h.call(t, a) && r(e, a, t[a]);
  return e;
};
var p = (e, t) => {
  var a = {};
  for (var m in e)
    Z.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && l)
    for (var m of l(e))
      t.indexOf(m) < 0 && h.call(e, m) && (a[m] = e[m]);
  return a;
};
import H, { forwardRef as d } from "react";
import c from "../../lib/OptiBase.mjs";
const f = d((m, a) => {
  var o = m, { children: e } = o, t = p(o, ["children"]);
  return /* @__PURE__ */ H.createElement(c, V({ ref: a }, t), e, /* @__PURE__ */ H.createElement("path", { d: "M228,48a20,20,0,0,0-20-20H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20Zm-35,68L140,63V52h11l53,53v11ZM140,97l19,19H140ZM204,71,185,52h19ZM116,52V68h0v48H52V52ZM105,204,52,151V140H63l53,53v11Zm11-45L97,140h19ZM52,185l19,19H52Zm88,19V188h0V140h64v64Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
