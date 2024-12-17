var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232,60V196a20,20,0,0,1-20,20H172a12,12,0,0,1,0-24h36V64H48v4a12,12,0,0,1-24,0V60A20,20,0,0,1,44,40H212A20,20,0,0,1,232,60ZM36,176a12,12,0,0,0,0,24,4,4,0,0,1,4,4,12,12,0,0,0,24,0A28,28,0,0,0,36,176Zm0-40a12,12,0,0,0,0,24,44.05,44.05,0,0,1,44,44,12,12,0,0,0,24,0A68.07,68.07,0,0,0,36,136Zm0-40a12,12,0,0,0,0,24,84.09,84.09,0,0,1,84,84,12,12,0,0,0,24,0A108.12,108.12,0,0,0,36,96Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
