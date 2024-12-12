var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && A(a, e, t[e]);
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
import Z from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M109.74,146.26A75.53,75.53,0,0,1,132,200a12,12,0,0,1-24,0,52,52,0,0,0-52-52,12,12,0,0,1,0-24A75.51,75.51,0,0,1,109.74,146.26ZM56,76a12,12,0,0,0,0,24A100,100,0,0,1,156,200a12,12,0,0,0,24,0A124,124,0,0,0,56,76Zm121.62,2.38A170.85,170.85,0,0,0,56,28a12,12,0,0,0,0,24A147,147,0,0,1,160.65,95.35,147,147,0,0,1,204,200a12,12,0,0,0,24,0A170.85,170.85,0,0,0,177.62,78.38ZM60,180a16,16,0,1,0,16,16A16,16,0,0,0,60,180Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
