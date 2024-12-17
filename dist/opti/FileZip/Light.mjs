var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M184,146H168a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V198h10a26,26,0,0,0,0-52Zm0,40H174V158h10a14,14,0,0,1,0,28Zm-50-34v56a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM94,208a6,6,0,0,1-6,6H56a6,6,0,0,1-5.21-9l26.87-47H56a6,6,0,0,1,0-12H88a6,6,0,0,1,5.21,9L66.34,202H88A6,6,0,0,1,94,208ZM212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,0,0,12,0V88A6,6,0,0,0,212.24,83.76ZM158,82V46.48L193.52,82Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
