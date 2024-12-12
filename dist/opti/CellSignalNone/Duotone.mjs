var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      c.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && c.call(e, o) && (t[o] = e[o]);
  return t;
};
import l, { forwardRef as d } from "react";
import u from "../../lib/OptiBase.mjs";
const A = d((o, t) => {
  var m = o, { children: e } = m, a = i(m, ["children"]);
  return /* @__PURE__ */ l.createElement(u, f({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M198.12,25.23a16,16,0,0,0-17.43,3.47l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A16,16,0,0,0,198.12,25.23ZM192,200H32L192,40Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
