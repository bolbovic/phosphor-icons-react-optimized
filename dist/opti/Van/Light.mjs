var V = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      Z.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M252.55,108.09,207,55a14,14,0,0,0-10.74-5H32A14,14,0,0,0,18,64V176a14,14,0,0,0,14,14H50.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V112A6,6,0,0,0,252.55,108.09Zm-54.7-45.32L234.94,106H174V62h22.26A2,2,0,0,1,197.85,62.77ZM102,106V62h60v44ZM32,62H90v44H30V64A2,2,0,0,1,32,62ZM80,202a18,18,0,1,1,18-18A18,18,0,0,1,80,202Zm112,0a18,18,0,1,1,18-18A18,18,0,0,1,192,202Zm48-24H221.4a30,30,0,0,0-58.8,0H109.4a30,30,0,0,0-58.8,0H32a2,2,0,0,1-2-2V118H242v58A2,2,0,0,1,240,178Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
