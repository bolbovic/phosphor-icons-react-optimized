var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && A(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M198,88a30,30,0,1,0-30,30A30,30,0,0,0,198,88Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,168,106Zm-5.15,108a14,14,0,0,0,12.74-8.21l31.8-69.94A62,62,0,0,0,168,26a6.61,6.61,0,0,0-1,.08L29.7,49A14,14,0,0,0,18,62.78v50.44A14,14,0,0,0,29.7,127L130,143.75V200a14,14,0,0,0,14,14h2v2a38,38,0,0,0,38,38h16a6,6,0,0,0,0-12H184a26,26,0,0,1-26-26v-2ZM30,113.22V62.78a2,2,0,0,1,1.67-2L168.48,38a50,50,0,0,1,0,100L31.67,115.2A2,2,0,0,1,30,113.22ZM142,200V145.75l25,4.17a6.61,6.61,0,0,0,1,.08,61.75,61.75,0,0,0,21.53-3.86l-24.86,54.69a2,2,0,0,1-1.82,1.17H144A2,2,0,0,1,142,200Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
