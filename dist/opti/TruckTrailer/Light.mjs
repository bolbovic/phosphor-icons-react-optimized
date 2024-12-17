var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((m, e) => {
  var h = m, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M222,98.47V96a54.06,54.06,0,0,0-54-54h-8a14,14,0,0,0-14,14V178H126V72a6,6,0,0,0-6-6H16A14,14,0,0,0,2,80V184a30,30,0,0,0,54,18,30,30,0,0,0,53.4-12h85.2a30,30,0,0,0,59.4-6V136A38.07,38.07,0,0,0,222,98.47ZM158,56a2,2,0,0,1,2-2h8a42,42,0,0,1,42,42v8a6,6,0,0,0,6,6,26,26,0,0,1,26,26v24a30,30,0,0,0-47.4,18H158ZM16,78h98V178h-4.6A30,30,0,0,0,56,166a30,30,0,0,0-42-6V80A2,2,0,0,1,16,78ZM32,202a18,18,0,1,1,18-18A18,18,0,0,1,32,202Zm48,0a18,18,0,1,1,18-18A18,18,0,0,1,80,202Zm144,0a18,18,0,1,1,18-18A18,18,0,0,1,224,202Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
