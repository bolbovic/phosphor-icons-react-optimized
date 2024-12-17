var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? H(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      c.call(a, t) && i(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && c.call(e, r) && (t[r] = e[r]);
  return t;
};
import A, { forwardRef as L } from "react";
import V from "../../lib/OptiBase.mjs";
const d = L((r, t) => {
  var o = r, { children: e } = o, a = s(o, ["children"]);
  return /* @__PURE__ */ A.createElement(V, f({ ref: t }, a), e, /* @__PURE__ */ A.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,14V201.52L54.49,46H208A2,2,0,0,1,210,48ZM46,208V54.48L201.51,210H48A2,2,0,0,1,46,208Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
