var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    d.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      l.call(a, t) && p(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    d.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && l.call(e, o) && (t[o] = e[o]);
  return t;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const E = n((o, t) => {
  var m = o, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: t }, a), e, /* @__PURE__ */ i.createElement("path", { d: "M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204Z" }));
});
E.displayName = "Bold";
export {
  E as Bold
};
