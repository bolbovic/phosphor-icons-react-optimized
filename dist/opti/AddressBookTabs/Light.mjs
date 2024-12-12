var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as s } from "react";
import c from "../../lib/OptiBase.mjs";
const f = s((m, e) => {
  var A = m, { children: a } = A, t = h(A, ["children"]);
  return /* @__PURE__ */ i.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm-18,68h20v52H190Zm20-54V90H190V46h18A2,2,0,0,1,210,48ZM46,208V48a2,2,0,0,1,2-2H178V210H48A2,2,0,0,1,46,208Zm162,2H190V166h20v42A2,2,0,0,1,208,210Zm-58.19-43.49A38,38,0,0,0,131.23,143a30,30,0,1,0-38.45,0A38,38,0,0,0,74.19,166.5a6,6,0,0,0,11.62,3C88.67,158.38,99.93,150,112,150s23.34,8.38,26.19,19.49a6,6,0,0,0,11.62-3ZM94,120a18,18,0,1,1,18,18A18,18,0,0,1,94,120Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
