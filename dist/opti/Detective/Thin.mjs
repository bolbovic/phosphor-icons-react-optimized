var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((r, e) => {
  var l = r, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ H.createElement(c, h({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M248,116H218L169.35,49a12,12,0,0,0-19-.51L137.45,63.38l-.1.12a12,12,0,0,1-18.7,0l-.1-.12L105.66,48.44a12,12,0,0,0-19,.51L38,116H8a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8ZM93.13,53.65A4,4,0,0,1,96.26,52a4,4,0,0,1,3.2,1.5l.1.12,12.89,14.94A19.86,19.86,0,0,0,128,76h0a19.86,19.86,0,0,0,15.55-7.44l12.89-14.94.1-.12a4.06,4.06,0,0,1,3.2-1.5,4,4,0,0,1,3.13,1.65L208.15,116H47.85ZM180,148a32,32,0,0,0-32,32H108a32,32,0,1,0-1,8h42a32,32,0,1,0,31-40ZM76,204a24,24,0,1,1,24-24A24,24,0,0,1,76,204Zm104,0a24,24,0,1,1,24-24A24,24,0,0,1,180,204Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
