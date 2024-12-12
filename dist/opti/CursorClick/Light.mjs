var c = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (L)
    for (var e of L(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && L)
    for (var l of L(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as h } from "react";
import f from "../../lib/OptiBase.mjs";
const s = h((l, e) => {
  var m = l, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M90,24V16a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0ZM16,102h8a6,6,0,0,0,0-12H16a6,6,0,0,0,0,12ZM125.32,37.37a6,6,0,0,0,8.05-2.69l8-16a6,6,0,0,0-10.74-5.37l-8,16A6,6,0,0,0,125.32,37.37Zm-96,85.26-16,8a6,6,0,0,0,5.36,10.74l16-8a6,6,0,1,0-5.36-10.74ZM217.9,185.41a14,14,0,0,1,0,19.8L205.21,217.9a14,14,0,0,1-19.8,0L134.1,166.59a2,2,0,0,0-3.21.54l-17.75,46.24a2.44,2.44,0,0,0-.1.24A13.85,13.85,0,0,1,100.26,222c-.23,0-.45,0-.68,0A13.85,13.85,0,0,1,87,212.38L34.7,52.3A14,14,0,0,1,52.3,34.7L212.38,87A14,14,0,0,1,213.61,113l-.24.09-46.25,17.76a2,2,0,0,0-.53,3.21Zm-8.49,8.49L158.1,142.59h0a14,14,0,0,1,4.32-22.74l.24-.1L208.91,102a2,2,0,0,0-.26-3.61L48.58,46.11a2.33,2.33,0,0,0-.65-.11,2,2,0,0,0-1.82,2.58L98.38,208.65a1.84,1.84,0,0,0,1.77,1.35,1.81,1.81,0,0,0,1.84-1.09l17.76-46.25.1-.24a14,14,0,0,1,22.74-4.32l51.31,51.31a2,2,0,0,0,2.83,0l12.68-12.68A2,2,0,0,0,209.41,193.9Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
