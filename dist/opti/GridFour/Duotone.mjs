var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    V.call(t, a) && H(e, a, t[a]);
  if (m)
    for (var a of m(t))
      c.call(t, a) && H(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var o in e)
    V.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, a) => {
  var p = o, { children: e } = p, t = Z(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M208,56V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
