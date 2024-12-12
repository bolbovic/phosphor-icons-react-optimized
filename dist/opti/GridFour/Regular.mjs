var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, f = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      H.call(t, a) && l(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && H.call(e, r) && (a[r] = e[r]);
  return a;
};
import V, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const h = c((r, a) => {
  var o = r, { children: e } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ V.createElement(d, f({ ref: a }, t), e, /* @__PURE__ */ V.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z" }));
});
h.displayName = "Regular";
export {
  h as Regular,
  h as default
};
