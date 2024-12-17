var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
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
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ h.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M238.78,183.79,98.28,87.65A40.18,40.18,0,0,0,100,76a40,40,0,1,0-15.29,31.45l30,20.56-30,20.56a40,40,0,1,0,3.57,59.74h0A39.73,39.73,0,0,0,100,180a40.18,40.18,0,0,0-1.72-11.66L136,142.54l89.22,61.06a12,12,0,0,0,13.56-19.81ZM71.31,191.33h0A16,16,0,1,1,76,180,16,16,0,0,1,71.31,191.33ZM48.69,87.3a16,16,0,1,1,22.62,0h0A16,16,0,0,1,48.69,87.3Zm112.82,23.24a12,12,0,0,1,3.13-16.68L225.22,52.4a12,12,0,0,1,13.56,19.81l-60.59,41.46a12,12,0,0,1-16.68-3.13Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
