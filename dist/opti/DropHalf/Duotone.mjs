var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const A = s((o, t) => {
  var p = o, { children: e } = p, a = f(p, ["children"]);
  return /* @__PURE__ */ m.createElement(Z, d({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M208,144a80,80,0,0,1-80,80V16S208,72,208,144Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM56,144c0-50,42.26-92.71,64-111.4V215.54A72.08,72.08,0,0,1,56,144Zm80,71.54V32.6C157.74,51.29,200,94,200,144A72.08,72.08,0,0,1,136,215.54Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
