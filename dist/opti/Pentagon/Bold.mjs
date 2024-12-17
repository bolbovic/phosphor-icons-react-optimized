var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (o)
    for (var a of o(t))
      d.call(t, a) && m(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && d.call(e, l) && (a[l] = e[l]);
  return a;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const A = n((l, a) => {
  var r = l, { children: e } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M228,84.38l-87.9-68.29-.26-.2a19.92,19.92,0,0,0-23.66,0l-.26.2L28,84.38a20,20,0,0,0-7.09,22l32,107.51.08.26A19.93,19.93,0,0,0,72,228H184a19.93,19.93,0,0,0,19-13.87l.08-.26,32-107.51A20,20,0,0,0,228,84.38ZM181,204H75L44.62,101.87,128,37.09l83.38,64.78Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
