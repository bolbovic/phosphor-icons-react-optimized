var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(M, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M220.69,100.17A12,12,0,0,0,210.84,114,85,85,0,0,1,212,128,83.57,83.57,0,0,1,194,179.94a83.48,83.48,0,0,0-29-23.42,52,52,0,1,0-74,0,83.48,83.48,0,0,0-29,23.42A83.94,83.94,0,0,1,128,44a85,85,0,0,1,14,1.16,12,12,0,0,0,4-23.67A108.1,108.1,0,0,0,20,128a108,108,0,0,0,216,0,109.19,109.19,0,0,0-1.49-18A12,12,0,0,0,220.69,100.17ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120ZM79.57,196.57a60,60,0,0,1,96.86,0,83.72,83.72,0,0,1-96.86,0ZM240.49,48.49l-32,32a12,12,0,0,1-17,0l-16-16a12,12,0,0,1,17-17L200,55l23.51-23.52a12,12,0,1,1,17,17Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
