var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var l in e)
    i.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      a.indexOf(l) < 0 && p.call(e, l) && (t[l] = e[l]);
  return t;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const E = n((l, t) => {
  var m = l, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
