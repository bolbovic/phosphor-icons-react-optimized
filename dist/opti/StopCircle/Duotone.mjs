var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (m)
    for (var a of m(t))
      Z.call(t, a) && c(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && Z.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((o, a) => {
  var p = o, { children: e } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(l, h({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,128H96V96h64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM160,88H96a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V96A8,8,0,0,0,160,88Zm-8,64H104V104h48Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
