var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && l(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const L = s((o, a) => {
  var m = o, { children: e } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, h({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M204,64V40a20,20,0,0,0-20-20H72A20,20,0,0,0,52,40V64A20,20,0,0,0,72,84h2L52.15,222.13a12,12,0,1,0,23.7,3.74L83.1,180h89.8l7.25,45.87a12,12,0,1,0,23.7-3.74L182,84h2A20,20,0,0,0,204,64ZM76,44H180V60H76Zm93.11,112H86.89L98.25,84h59.5Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
