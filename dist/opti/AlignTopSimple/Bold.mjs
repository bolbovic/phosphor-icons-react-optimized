var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as H } from "react";
import h from "../../lib/OptiBase.mjs";
const n = H((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M212,32a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,32ZM180,80V224a20,20,0,0,1-20,20H96a20,20,0,0,1-20-20V80A20,20,0,0,1,96,60h64A20,20,0,0,1,180,80Zm-24,4H100V220h56Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
