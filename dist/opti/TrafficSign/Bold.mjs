var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as L } from "react";
import h from "../../lib/OptiBase.mjs";
const n = L((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M246,113.46,142.54,10a20.57,20.57,0,0,0-29.08,0L10,113.46a20.57,20.57,0,0,0,0,29.08L113.46,246h0a20.57,20.57,0,0,0,29.08,0L246,142.54a20.57,20.57,0,0,0,0-29.08ZM128,226.57,29.43,128,128,29.43,226.57,128Zm7.51-122.08a12,12,0,0,1,17-17l24,24a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L139,132H112a12,12,0,0,0-12,12v4a12,12,0,0,1-24,0v-4a36,36,0,0,1,36-36h27Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
