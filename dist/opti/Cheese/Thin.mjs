var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var H = m, { children: a } = H, t = v(H, ["children"]);
  return /* @__PURE__ */ A.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M184,36a4.05,4.05,0,0,0-1.15.17l-160,48v0A4,4,0,0,0,20,88v24a4,4,0,0,0,4,4h8a20.11,20.11,0,0,1,20,19.61,19.59,19.59,0,0,1-5.72,14.14A20.92,20.92,0,0,1,31.46,156H24a4,4,0,0,0-4,4v32a4,4,0,0,0,4,4H224a12,12,0,0,0,12-12V88A52.06,52.06,0,0,0,184,36Zm.57,8a44.06,44.06,0,0,1,43.24,40H51.25ZM196,104a28,28,0,1,1-53.29-12h50.58A28,28,0,0,1,196,104Zm-56,84H84v-4a28,28,0,0,1,56,0Zm88-4a4,4,0,0,1-4,4H148v-4a36,36,0,0,0-72,0v4H28V164h3.46A29,29,0,0,0,52,155.35a27.52,27.52,0,0,0,8-19.89A28.14,28.14,0,0,0,32,108H28V92H134.07a36,36,0,1,0,67.86,0H228Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
