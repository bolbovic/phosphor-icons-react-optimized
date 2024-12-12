var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import h from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(h, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M212,104V40a12,12,0,0,0-12-12H56a12,12,0,0,0-8,21L96.44,92H56a12,12,0,0,0-12,12v64a12,12,0,0,0,3.52,8.49l72,72A12,12,0,0,0,140,240V180h60a12,12,0,0,0,8-21l-48.41-43H200A12,12,0,0,0,212,104Zm-43.56,52H128a12,12,0,0,0-12,12v43L68,163V116h55.44ZM188,92H132.56l-45-40H188Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
