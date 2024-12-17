var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var H in a)
    V.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && Z.call(a, H) && (e[H] = a[H]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, e) => {
  var r = H, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M190,72a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h24A6,6,0,0,1,190,72Zm-6,26H160a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12ZM72,78H96a6,6,0,0,0,0-12H72a6,6,0,0,0,0,12ZM96,98H72a6,6,0,0,0,0,12H96a6,6,0,0,0,0-12ZM222,48V224a6,6,0,0,1-12,0V206H134v18a6,6,0,0,1-12,0V206H46v18a6,6,0,0,1-12,0V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM122,194V46H48a2,2,0,0,0-2,2V194Zm12,0h76V48a2,2,0,0,0-2-2H134Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
