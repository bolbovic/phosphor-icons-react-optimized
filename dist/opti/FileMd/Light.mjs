var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((m, e) => {
  var h = m, { children: a } = h, t = l(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V224a6,6,0,0,0,12,0V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM144,146H128a6,6,0,0,0-6,6v56a6,6,0,0,0,6,6h16a34,34,0,0,0,0-68Zm0,56H134V158h10a22,22,0,0,1,0,44Zm-42-50v56a6,6,0,0,1-12,0V171L72.92,195.44a6,6,0,0,1-9.84,0L46,171v37a6,6,0,0,1-12,0V152a6,6,0,0,1,10.92-3.44l23.08,33,23.08-33A6,6,0,0,1,102,152Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
