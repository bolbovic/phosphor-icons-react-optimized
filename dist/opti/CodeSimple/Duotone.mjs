var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (l)
    for (var a of l(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && l)
    for (var o of l(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as s } from "react";
import h from "../../lib/OptiBase.mjs";
const E = s((o, a) => {
  var m = o, { children: e } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ r.createElement(h, i({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M240,128l-72,64H88L16,128,88,64h80Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M93.31,70,28,128l65.27,58a8,8,0,1,1-10.62,12l-72-64a8,8,0,0,1,0-12l72-64A8,8,0,1,1,93.31,70Zm152,52-72-64a8,8,0,0,0-10.62,12L228,128l-65.27,58a8,8,0,1,0,10.62,12l72-64a8,8,0,0,0,0-12Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};