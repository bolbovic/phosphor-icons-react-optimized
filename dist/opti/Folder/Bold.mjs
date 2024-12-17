var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    H.call(a, t) && m(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && m(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var o in e)
    H.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && p.call(e, o) && (t[o] = e[o]);
  return t;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((o, t) => {
  var l = o, { children: e } = l, a = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(A, d({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM44,56H90.61l10.67,12H44ZM212,196H44V92H212Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
