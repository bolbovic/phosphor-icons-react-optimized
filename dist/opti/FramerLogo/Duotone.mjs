var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && p(e, a, t[a]);
  if (m)
    for (var a of m(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((o, a) => {
  var l = o, { children: e } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ r.createElement(d, h({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M200,104H128L56,40H200ZM56,168l72,72V168h72l-72-64H56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M208,104V40a8,8,0,0,0-8-8H56a8,8,0,0,0-5.31,14L107,96H56a8,8,0,0,0-8,8v64a8,8,0,0,0,2.34,5.66l72,72A8,8,0,0,0,136,240V176h64a8,8,0,0,0,5.31-14L149,112h51A8,8,0,0,0,208,104Zm-29,56H128a8,8,0,0,0-8,8v52.69l-56-56V112h61Zm13-64H131L77,48H192Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
