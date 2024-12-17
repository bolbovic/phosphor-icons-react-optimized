var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
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
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,112H216a34,34,0,0,1,0-68h10ZM30,94H40a34,34,0,0,1,0,68H30Zm0,98V174H40a46,46,0,0,0,0-92H30V64a2,2,0,0,1,2-2h90V194H32A2,2,0,0,1,30,192Zm194,2H134V62h90a2,2,0,0,1,2,2V82H216a46,46,0,0,0,0,92h10v18A2,2,0,0,1,224,194Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
