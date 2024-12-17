var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? A(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
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
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const E = d((l, t) => {
  var m = l, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M246.66,132.44,201,200.88A16,16,0,0,1,187.72,208H32a8,8,0,0,1-6.66-12.44L70.39,128l-45-67.56A8,8,0,0,1,32,48H187.72A16,16,0,0,1,201,55.12l45.63,68.44A8,8,0,0,1,246.66,132.44Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
