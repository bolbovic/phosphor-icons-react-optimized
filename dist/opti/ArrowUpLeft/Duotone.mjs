var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var l = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && l(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && l(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const E = h((o, t) => {
  var p = o, { children: e } = p, a = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M168,64,64,168V64Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M197.66,186.34,127.31,116l46.35-46.34A8,8,0,0,0,168,56H64a8,8,0,0,0-8,8V168a8,8,0,0,0,13.66,5.66L116,127.31l70.34,70.35a8,8,0,0,0,11.32-11.32ZM72,72h76.69l-38.34,38.34h0L72,148.69Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
