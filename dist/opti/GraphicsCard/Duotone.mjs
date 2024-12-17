var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && A(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const M = n((m, e) => {
  var r = m, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement(
    "path",
    {
      d: "M232,56H16V184H232a8,8,0,0,0,8-8V64A8,8,0,0,0,232,56ZM80,152a32,32,0,1,1,32-32A32,32,0,0,1,80,152Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,176,152Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ Z.createElement("path", { d: "M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm0,128H24V64H232Zm-56-16a40,40,0,1,0-40-40A40,40,0,0,0,176,160Zm-24-40a23.74,23.74,0,0,1,2.35-10.34l32,32A23.74,23.74,0,0,1,176,144,24,24,0,0,1,152,120Zm48,0a23.74,23.74,0,0,1-2.35,10.34l-32-32A23.74,23.74,0,0,1,176,96,24,24,0,0,1,200,120ZM80,160a40,40,0,1,0-40-40A40,40,0,0,0,80,160ZM56,120a23.74,23.74,0,0,1,2.35-10.34l32,32A23.74,23.74,0,0,1,80,144,24,24,0,0,1,56,120Zm48,0a23.74,23.74,0,0,1-2.35,10.34l-32-32A23.74,23.74,0,0,1,80,96,24,24,0,0,1,104,120Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
