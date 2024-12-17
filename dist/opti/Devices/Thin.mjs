var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var H = m, { children: a } = H, t = n(H, ["children"]);
  return /* @__PURE__ */ A.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M224,76H204V64a20,20,0,0,0-20-20H40A20,20,0,0,0,20,64v96a20,20,0,0,0,20,20H156v12a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V96A20,20,0,0,0,224,76ZM40,172a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H184a12,12,0,0,1,12,12V76H176a20,20,0,0,0-20,20v76Zm196,20a12,12,0,0,1-12,12H176a12,12,0,0,1-12-12V96a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12ZM132,208a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h40A4,4,0,0,1,132,208Zm80-96a4,4,0,0,1-4,4H192a4,4,0,0,1,0-8h16A4,4,0,0,1,212,112Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
