var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const h = V((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M198.84,35.77a14,14,0,0,0-14.21.37L62,112.83V40a6,6,0,0,0-12,0V216a6,6,0,0,0,12,0V143.16l122.63,76.7a14,14,0,0,0,14.21.37A13.69,13.69,0,0,0,206,208.12V47.88A13.69,13.69,0,0,0,198.84,35.77ZM194,208.12a1.79,1.79,0,0,1-1,1.62,2,2,0,0,1-2-.05L62.88,129.56a1.82,1.82,0,0,1,0-3.12L191,46.31a2,2,0,0,1,1-.31,2.1,2.1,0,0,1,1,.26,1.79,1.79,0,0,1,1,1.62Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
