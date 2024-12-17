var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && m(e, t, a[t]);
  if (o)
    for (var t of o(a))
      d.call(a, t) && m(e, t, a[t]);
  return e;
};
var c = (e, a) => {
  var t = {};
  for (var l in e)
    p.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      a.indexOf(l) < 0 && d.call(e, l) && (t[l] = e[l]);
  return t;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const n = s((l, t) => {
  var r = l, { children: e } = r, a = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(V, A({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M211.45,52.51l-80-24A12,12,0,0,0,116,40V140.22A52,52,0,1,0,140,184V104.13l64.55,19.36A12,12,0,0,0,220,112V64A12,12,0,0,0,211.45,52.51ZM88,212a28,28,0,1,1,28-28A28,28,0,0,1,88,212ZM196,95.87l-56-16.8V56.13l56,16.8Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
