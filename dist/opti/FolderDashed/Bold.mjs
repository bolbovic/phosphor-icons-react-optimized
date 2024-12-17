var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, h({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M100,208a12,12,0,0,1-12,12H39.38A19.41,19.41,0,0,1,20,200.62V192a12,12,0,0,1,24,0v4H88A12,12,0,0,1,100,208Zm60-12H128a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm64-56a12,12,0,0,0-12,12v44H200a12,12,0,0,0,0,24h16.89A19.13,19.13,0,0,0,236,200.89V152A12,12,0,0,0,224,140Zm-8-72H168a12,12,0,0,0,0,24h44v20a12,12,0,0,0,24,0V88A20,20,0,0,0,216,68ZM32,164a12,12,0,0,0,12-12V120a12,12,0,0,0-24,0v32A12,12,0,0,0,32,164ZM20,80V52A20,20,0,0,1,40,32H92.41a20,20,0,0,1,14.94,6.71h0L137,72a12,12,0,0,1-9,20H32A12,12,0,0,1,20,80ZM44,68h57.28L90.61,56H44Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
