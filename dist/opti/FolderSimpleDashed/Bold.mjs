var v = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M20,80V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L135.2,70.4a12,12,0,1,1-14.4,19.2L92,68H44V80a12,12,0,0,1-24,0ZM88,196H44v-4a12,12,0,0,0-24,0v8.62A19.41,19.41,0,0,0,39.38,220H88a12,12,0,0,0,0-24Zm72,0H128a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm64-56a12,12,0,0,0-12,12v44H200a12,12,0,0,0,0,24h16.89A19.13,19.13,0,0,0,236,200.89V152A12,12,0,0,0,224,140Zm-8-72H168a12,12,0,0,0,0,24h44v20a12,12,0,0,0,24,0V88A20,20,0,0,0,216,68ZM32,164a12,12,0,0,0,12-12V120a12,12,0,0,0-24,0v32A12,12,0,0,0,32,164Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
