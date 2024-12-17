var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((o, e) => {
  var h = o, { children: a } = h, t = d(h, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M244,196h-8a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4h8a12,12,0,0,0,0-24h-8a28,28,0,0,0-28,28v4h-9.68a44.13,44.13,0,0,0-34-31.2l-35.2-84.49A20,20,0,0,0,110.67,36H24A20,20,0,0,0,4,56V157.7A44,44,0,0,0,44,220H156a44.06,44.06,0,0,0,42.32-32H208v4a28,28,0,0,0,28,28h8a12,12,0,0,0,0-24ZM138,132H68V60h40ZM44,60v72a43.85,43.85,0,0,0-16,3V60ZM156,196H44a20,20,0,0,1,0-40H156a20,20,0,0,1,0,40Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
