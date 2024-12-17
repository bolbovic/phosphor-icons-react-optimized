var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var h in a)
    A.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && r)
    for (var h of r(a))
      t.indexOf(h) < 0 && o.call(a, h) && (e[h] = a[h]);
  return e;
};
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((h, e) => {
  var H = h, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ l.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M246,128a6,6,0,0,1-6,6H221.61A46.07,46.07,0,0,1,176,174H134v28h26a30,30,0,0,1,30,30,6,6,0,0,1-12,0,18,18,0,0,0-18-18H134v18a6,6,0,0,1-12,0V214H96a18,18,0,0,0-18,18,6,6,0,0,1-12,0,30,30,0,0,1,30-30h26V174H80a46.07,46.07,0,0,1-45.61-40H16a6,6,0,0,1,0-12H40a6,6,0,0,1,6,6,34,34,0,0,0,34,34h96a34,34,0,0,0,34-34,6,6,0,0,1,6-6h24A6,6,0,0,1,246,128ZM69.43,137.17A14,14,0,0,1,66.14,126L79.86,30A14.07,14.07,0,0,1,93.72,18h68.56a14.07,14.07,0,0,1,13.86,12l13.72,96A14,14,0,0,1,176,142H80A14,14,0,0,1,69.43,137.17Zm9.06-7.86A2,2,0,0,0,80,130h96a2,2,0,0,0,1.51-.69,2,2,0,0,0,.47-1.59l-13.72-96a2,2,0,0,0-2-1.72H93.72a2,2,0,0,0-2,1.72L78,127.72A2,2,0,0,0,78.49,129.31Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
