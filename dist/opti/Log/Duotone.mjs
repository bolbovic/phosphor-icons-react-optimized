var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && H(e, a, t[a]);
  if (o)
    for (var a of o(t))
      l.call(t, a) && H(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var c in e)
    p.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      t.indexOf(c) < 0 && l.call(e, c) && (a[c] = e[c]);
  return a;
};
import m, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((c, a) => {
  var r = c, { children: e } = r, t = s(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M240,136c0,35.35-17.91,64-40,64s-40-28.65-40-64,17.91-64,40-64S240,100.65,240,136Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M212,136a12,12,0,1,1-12-12A12,12,0,0,1,212,136Zm36,0c0,40.37-21.08,72-48,72H56c-26.92,0-48-31.63-48-72S29.08,64,56,64H92.69l37.65-37.66A8,8,0,0,1,136,24h32a8,8,0,0,1,0,16H139.31l-24,24H200C226.92,64,248,95.63,248,136ZM56,192H169.51a73.46,73.46,0,0,1-12.67-24H80a8,8,0,0,1,0-16h73.16A110.63,110.63,0,0,1,152,136c0-22.86,6.76-42.9,17.51-56H56c-12.47,0-23.55,13.26-28.8,32H104a8,8,0,0,1,0,16H24.35q-.34,3.93-.35,8C24,166.36,38.65,192,56,192Zm176-56c0-30.36-14.65-56-32-56s-32,25.64-32,56,14.65,56,32,56S232,166.36,232,136Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};