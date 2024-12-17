var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && p(e, t, a[t]);
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
import l, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const h = s((o, t) => {
  var m = o, { children: e } = m, a = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(H, i({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M232,56l-45.71,96H40l48-48L40,56Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M238.76,51.73A8,8,0,0,0,232,48H40a8,8,0,0,0-5.66,13.66L76.69,104,34.34,146.34A8,8,0,0,0,40,160H173.62l-28.84,60.56a8,8,0,1,0,14.44,6.88l80-168A8,8,0,0,0,238.76,51.73ZM181.23,144H59.31l34.35-34.34a8,8,0,0,0,0-11.32L59.31,64h160Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
