var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var Z = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && Z(e, a, t[a]);
  if (o)
    for (var a of o(t))
      c.call(t, a) && Z(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && c.call(e, m) && (a[m] = e[m]);
  return a;
};
import l, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((m, a) => {
  var r = m, { children: e } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ l.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM80,164V92l48,36Zm64,0V92l48,36Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm68.8-94.4-48-36A8,8,0,0,0,136,92v72a8,8,0,0,0,12.8,6.4l48-36a8,8,0,0,0,0-12.8ZM152,148V108l26.67,20Zm-19.2-26.4-48-36A8,8,0,0,0,72,92v72a8,8,0,0,0,12.8,6.4l48-36a8,8,0,0,0,0-12.8ZM88,148V108l26.67,20Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
