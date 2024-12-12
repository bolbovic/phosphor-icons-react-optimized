var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var H = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    V.call(a, t) && H(e, t, a[t]);
  if (r)
    for (var t of r(a))
      c.call(a, t) && H(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    V.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && c.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((o, t) => {
  var p = o, { children: e } = p, a = i(p, ["children"]);
  return /* @__PURE__ */ m.createElement(l, n({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M88,48V208H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H80V200H40ZM216,200H96V56H216V200Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
