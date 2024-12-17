var Z = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (H)
    for (var e of H(t))
      V.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,112H216a36,36,0,0,1,0-72h12ZM28,92H40a36,36,0,0,1,0,72H28Zm0,100V172H40a44,44,0,0,0,0-88H28V64a4,4,0,0,1,4-4h92V196H32A4,4,0,0,1,28,192Zm196,4H132V60h92a4,4,0,0,1,4,4V84H216a44,44,0,0,0,0,88h12v20A4,4,0,0,1,224,196Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
