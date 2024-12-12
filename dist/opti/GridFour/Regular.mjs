var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, V = (e, r) => {
  for (var a in r || (r = {}))
    H.call(r, a) && p(e, a, r[a]);
  if (m)
    for (var a of m(r))
      l.call(r, a) && p(e, a, r[a]);
  return e;
};
var Z = (e, r) => {
  var a = {};
  for (var t in e)
    H.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((t, a) => {
  var o = t, { children: e } = o, r = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(i, V({ ref: a }, r), e, /* @__PURE__ */ c.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
