var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && A(a, e, m[e]);
  if (r)
    for (var e of r(m))
      V.call(m, e) && A(a, e, m[e]);
  return a;
};
var h = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as n } from "react";
import s from "../../lib/OptiBase.mjs";
const c = n((t, e) => {
  var o = t, { children: a } = o, m = h(o, ["children"]);
  return /* @__PURE__ */ i.createElement(s, Z({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm-20,64h24v56H188Zm24-52V92H188V44h20A4,4,0,0,1,212,48ZM44,208V48a4,4,0,0,1,4-4H180V212H48A4,4,0,0,1,44,208Zm164,4H188V164h24v44A4,4,0,0,1,208,212Zm-60.12-45a36.24,36.24,0,0,0-20.44-23.67,28,28,0,1,0-30.88,0A36.28,36.28,0,0,0,76.13,167,4,4,0,0,0,79,171.87a3.87,3.87,0,0,0,1,.13,4,4,0,0,0,3.87-3C87,157,99.05,148,112,148s25.05,9,28.12,21a4,4,0,0,0,7.76-2ZM92,120a20,20,0,1,1,20,20A20,20,0,0,1,92,120Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
