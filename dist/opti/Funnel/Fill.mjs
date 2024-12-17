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
  return /* @__PURE__ */ s.createElement(A, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M227.81,66.76l-.08.09L160,139.17v55.49A16,16,0,0,1,152.87,208l-32,21.34A16,16,0,0,1,96,216V139.17L28.27,66.85l-.08-.09A16,16,0,0,1,40,40H216a16,16,0,0,1,11.84,26.76Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
