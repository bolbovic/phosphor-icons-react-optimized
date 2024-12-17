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
  return /* @__PURE__ */ i.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M200,140H61.08A68.1,68.1,0,0,0,128,196h72a12,12,0,0,1,0,24H128a92,92,0,0,1,0-184h72a12,12,0,0,1,0,24H128a68.1,68.1,0,0,0-66.92,56H200a12,12,0,0,1,0,24Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
