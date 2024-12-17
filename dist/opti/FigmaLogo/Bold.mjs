var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && A(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ l.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M198.15,96A44,44,0,0,0,168,20H96A44,44,0,0,0,65.85,96a43.9,43.9,0,0,0,1.23,65.12A48,48,0,1,0,148,196V167.17A44,44,0,0,0,198.15,96ZM188,64a20,20,0,0,1-20,20H148V44h20A20,20,0,0,1,188,64ZM76,64A20,20,0,0,1,96,44h28V84H96A20,20,0,0,1,76,64Zm20,84a20,20,0,0,1,0-40h28v40H96Zm28,48a24,24,0,1,1-24-24h24Zm44-48a20,20,0,1,1,20-20A20,20,0,0,1,168,148Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
