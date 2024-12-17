var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var H = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, V = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && H(e, t, a[t]);
  if (m)
    for (var t of m(a))
      n.call(a, t) && H(e, t, a[t]);
  return e;
};
var h = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((o, t) => {
  var p = o, { children: e } = p, a = h(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, V({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M200,40V224H168V32h24A8,8,0,0,1,200,40Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-40,0H176V40h16ZM64,40h96V216H64Zm80,92a12,12,0,1,1-12-12A12,12,0,0,1,144,132Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
