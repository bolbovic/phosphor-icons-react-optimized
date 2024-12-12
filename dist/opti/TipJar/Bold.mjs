var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var V in a)
    h.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && m)
    for (var V of m(a))
      t.indexOf(V) < 0 && p.call(a, V) && (e[V] = a[V]);
  return e;
};
import l, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((V, e) => {
  var o = V, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ l.createElement(c, H({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM164,48H140V36h24ZM116,36V48H92V36Zm80,164a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V92A20,20,0,0,1,80,72h96a20,20,0,0,1,20,20Zm-28-38a30,30,0,0,1-28,29.93V196a12,12,0,0,1-24,0v-4h-8a12,12,0,0,1,0-24h30a6,6,0,0,0,0-12H118a30,30,0,0,1-2-59.93V96a12,12,0,0,1,24,0h8a12,12,0,0,1,0,24H118a6,6,0,0,0,0,12h20A30,30,0,0,1,168,162Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
