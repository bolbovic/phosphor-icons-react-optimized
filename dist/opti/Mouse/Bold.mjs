var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var m in e)
    d.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && l.call(e, m) && (a[m] = e[m]);
  return a;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((m, a) => {
  var r = m, { children: e } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, A({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H140V36h4A44.05,44.05,0,0,1,188,80ZM112,36h4v64H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H188v52A44.05,44.05,0,0,1,144,220Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
