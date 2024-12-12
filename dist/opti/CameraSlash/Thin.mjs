var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var l = r, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ n.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L60.78,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H199l6.08,6.69a4,4,0,1,0,5.92-5.38Zm97.58,119.23A31.69,31.69,0,0,1,128,164a32,32,0,0,1-22.48-54.78ZM48,204a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68h20l32.09,35.3a40,40,0,0,0,53.79,59.16L191.69,204ZM228,80V186a4,4,0,0,1-8,0V80a12,12,0,0,0-12-12H176a4,4,0,0,1-3.32-1.78L157.85,44H98.13l-.82,1.23a4,4,0,1,1-6.65-4.44l2-3A4,4,0,0,1,96,36h64a4,4,0,0,1,3.33,1.78L178.13,60H208A20,20,0,0,1,228,80Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
