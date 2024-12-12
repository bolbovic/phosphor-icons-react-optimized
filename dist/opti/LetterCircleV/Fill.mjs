var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (l)
    for (var t of l(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const E = n((r, t) => {
  var m = r, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.43,75-32,80a8,8,0,0,1-14.86,0l-32-80A8,8,0,0,1,103.43,93L128,154.46,152.57,93A8,8,0,1,1,167.43,99Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
