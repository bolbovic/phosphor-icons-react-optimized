var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM60,120H196v48H60ZM164,48H140V36h24ZM116,36V48H92V36ZM80,72h96a20,20,0,0,1,20,20v4H60V92A20,20,0,0,1,80,72Zm96,148H80a20,20,0,0,1-20-20v-8H196v8A20,20,0,0,1,176,220Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
