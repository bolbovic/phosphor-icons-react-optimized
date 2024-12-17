var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      l.call(m, e) && Z(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((t, e) => {
  var o = t, { children: a } = o, m = A(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM128,68a60,60,0,1,0,60,60A60.07,60.07,0,0,0,128,68Zm0,112a52,52,0,1,1,52-52A52.06,52.06,0,0,1,128,180ZM196,68a8,8,0,1,1-8-8A8,8,0,0,1,196,68Zm-73.17,46.83-16,16a4,4,0,0,1-5.66-5.66l16-16a4,4,0,0,1,5.66,5.66Zm32,2.34a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66l32-32A4,4,0,0,1,154.83,117.17Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
