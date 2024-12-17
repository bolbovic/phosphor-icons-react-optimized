var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && p(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ l.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M188,97.68V92a36,36,0,0,0-36-36H140V36h28a4,4,0,0,1,4,4,12,12,0,0,0,24,0,28,28,0,0,0-28-28H104a12,12,0,0,0,0,24h12V56H104A36,36,0,0,0,68,92v5.68A44.06,44.06,0,0,0,36,140v76a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V140A44.06,44.06,0,0,0,188,97.68ZM104,80h48a12,12,0,0,1,12,12v4H92V92A12,12,0,0,1,104,80Zm92,132H60V140a20,20,0,0,1,20-20h96a20,20,0,0,1,20,20Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
