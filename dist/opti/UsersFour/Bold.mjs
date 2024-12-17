var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && m(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import M, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var A = o, { children: a } = A, t = l(A, ["children"]);
  return /* @__PURE__ */ M.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ M.createElement("path", { d: "M24.79,121.59a12,12,0,0,0,16.81-2.38,48,48,0,0,1,76.81,0,12,12,0,0,0,16.8,2.39,12.24,12.24,0,0,0,2.38-2.39h0a48,48,0,0,1,76.81,0,12,12,0,1,0,19.19-14.41,72,72,0,0,0-25.3-21.22,40,40,0,1,0-64.58,0A71,71,0,0,0,128,94.31a71,71,0,0,0-15.71-10.74,40,40,0,1,0-64.58,0,72,72,0,0,0-25.3,21.22A12,12,0,0,0,24.79,121.59ZM176,44a16,16,0,1,1-16,16A16,16,0,0,1,176,44ZM80,44A16,16,0,1,1,64,60,16,16,0,0,1,80,44ZM208.29,195.57a40,40,0,1,0-64.58,0A71.31,71.31,0,0,0,128,206.3a71.31,71.31,0,0,0-15.71-10.73,40,40,0,1,0-64.58,0,72,72,0,0,0-25.3,21.22A12,12,0,0,0,41.6,231.21a48,48,0,0,1,76.81,0,12,12,0,0,0,16.8,2.39,12.24,12.24,0,0,0,2.38-2.39h0a48,48,0,0,1,76.81,0,12,12,0,1,0,19.19-14.41A71.91,71.91,0,0,0,208.29,195.57ZM80,156a16,16,0,1,1-16,16A16,16,0,0,1,80,156Zm96,0a16,16,0,1,1-16,16A16,16,0,0,1,176,156Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
