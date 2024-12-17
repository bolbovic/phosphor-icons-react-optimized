var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      o.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM76,44h32v96H76Zm36,104a4,4,0,0,0,4-4V44h24V144a4,4,0,0,0,4,4h12v64H100V148Zm36-8V44h32v96ZM44,208V48a4,4,0,0,1,4-4H68V144a4,4,0,0,0,4,4H92v64H48A4,4,0,0,1,44,208Zm168,0a4,4,0,0,1-4,4H164V148h20a4,4,0,0,0,4-4V44h20a4,4,0,0,1,4,4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
