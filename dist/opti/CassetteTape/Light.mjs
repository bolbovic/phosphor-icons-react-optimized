var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((m, e) => {
  var H = m, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ h.createElement(c, l({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM76,194l15-20h74l15,20Zm150-2a2,2,0,0,1-2,2H195l-22.2-29.6A6,6,0,0,0,168,162H88a6,6,0,0,0-4.8,2.4L61,194H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM176,82H80a30,30,0,0,0,0,60h96a30,30,0,0,0,0-60ZM152,94a29.92,29.92,0,0,0,0,36H104a29.92,29.92,0,0,0,0-36ZM62,112a18,18,0,1,1,18,18A18,18,0,0,1,62,112Zm114,18a18,18,0,1,1,18-18A18,18,0,0,1,176,130Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
