var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = A((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M116,132V96a12,12,0,0,1,24,0v36a12,12,0,0,1-24,0Zm12,56a16,16,0,1,0-16-16A16,16,0,0,0,128,188ZM228,56v56c0,54.29-26.32,87.22-48.4,105.29-23.71,19.39-47.44,26-48.44,26.29a12.1,12.1,0,0,1-6.32,0c-1-.28-24.73-6.9-48.44-26.29C54.32,199.22,28,166.29,28,112V56A20,20,0,0,1,48,36H208A20,20,0,0,1,228,56Zm-24,4H52v52c0,35.71,13.09,64.69,38.91,86.15A126.14,126.14,0,0,0,128,219.38a126.28,126.28,0,0,0,37.09-21.23C190.91,176.69,204,147.71,204,112Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};