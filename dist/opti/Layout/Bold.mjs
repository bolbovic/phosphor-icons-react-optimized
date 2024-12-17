var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, H = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var V = (e, t) => {
  var a = {};
  for (var m in e)
    d.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && l.call(e, m) && (a[m] = e[m]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((m, a) => {
  var r = m, { children: e } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V92H44V60ZM44,116H92v80H44Zm72,80V116h96v80Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
