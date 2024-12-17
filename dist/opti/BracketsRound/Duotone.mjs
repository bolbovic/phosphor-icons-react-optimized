var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      s.call(a, t) && p(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && s.call(e, o) && (t[o] = e[o]);
  return t;
};
import c, { forwardRef as l } from "react";
import C from "../../lib/OptiBase.mjs";
const S = l((o, t) => {
  var m = o, { children: e } = m, a = d(m, ["children"]);
  return /* @__PURE__ */ c.createElement(C, i({ ref: t }, a), e, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M224,128c0,64-40,88-40,88H72s-40-24-40-88S72,40,72,40H184S224,64,224,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M40,128c0,58.29,34.67,80.25,36.15,81.16a8,8,0,0,1-8.27,13.7C66.09,221.78,24,195.75,24,128S66.09,34.22,67.88,33.14a8,8,0,0,1,8.26,13.7C74.54,47.83,40,69.82,40,128ZM188.12,33.14a8,8,0,0,0-8.27,13.7C181.33,47.75,216,69.71,216,128s-34.67,80.25-36.12,81.14a8,8,0,0,0,8.24,13.72C189.91,221.78,232,195.75,232,128S189.91,34.22,188.12,33.14Z" }));
});
S.displayName = "Duotone";
export {
  S as Duotone
};
