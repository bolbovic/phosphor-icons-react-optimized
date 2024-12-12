var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && l(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = H((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M56,120H216a20,20,0,0,0,7.79-38.42l-.46-.19L63.51,21.47A20,20,0,0,0,36,40v60A20,20,0,0,0,56,120Zm4-74.21L193.91,96H60ZM216,136H56a20,20,0,0,0-20,20v60a20,20,0,0,0,27.51,18.54l159.81-59.92.46-.19A20,20,0,0,0,216,136ZM60,210.22V160H193.91Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
