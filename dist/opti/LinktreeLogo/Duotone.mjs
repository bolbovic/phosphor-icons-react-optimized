var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && c(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const h = f((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M208,104a80,80,0,1,1-80-80A80,80,0,0,1,208,104Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M136,160v72a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0Zm72-64H147.31l42.35-42.34a8,8,0,0,0-11.32-11.32L136,84.69V24a8,8,0,0,0-16,0V84.69L77.66,42.34A8,8,0,0,0,66.34,53.66L108.69,96H48a8,8,0,0,0,0,16h60.69L66.34,154.34a8,8,0,0,0,11.32,11.32L128,115.31l50.34,50.35a8,8,0,0,0,11.32-11.32L147.31,112H208a8,8,0,0,0,0-16Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
