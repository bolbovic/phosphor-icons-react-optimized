var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import h, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((r, a) => {
  var m = r, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ h.createElement(n, c({ ref: a }, t), e, /* @__PURE__ */ h.createElement("path", { d: "M104.36,144,136,103.32V144ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-64,24a8,8,0,0,0-8-8h-8V80a8,8,0,0,0-14.31-4.91l-56,72A8,8,0,0,0,88,160h48v16a8,8,0,0,0,16,0V160h8A8,8,0,0,0,168,152Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
