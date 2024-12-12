var A = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var m = r, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ n.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M244,160a36,36,0,0,1-36,36H190.57a52.19,52.19,0,0,1-47.12-30l-30.15-64.6A44.17,44.17,0,0,0,73.43,76H64a44.05,44.05,0,0,0-44,44v24a44.05,44.05,0,0,0,44,44h8a36,36,0,0,0,33-21.6,4,4,0,1,1,7.33,3.2A44,44,0,0,1,72,196H64a52.06,52.06,0,0,1-52-52V120A52.06,52.06,0,0,1,64,68h9.43a52.19,52.19,0,0,1,47.12,30l30.15,64.6A44.17,44.17,0,0,0,190.57,188H208a28,28,0,0,0,0-56H188a32,32,0,0,1,0-64h20a28,28,0,0,1,28,28,4,4,0,0,1-8,0,20,20,0,0,0-20-20H188a24,24,0,0,0,0,48h20A36,36,0,0,1,244,160Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
