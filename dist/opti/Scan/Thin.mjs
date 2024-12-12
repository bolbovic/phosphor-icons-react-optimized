var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var H = m, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M220,40V80a4,4,0,0,1-8,0V44H176a4,4,0,0,1,0-8h40A4,4,0,0,1,220,40ZM80,212H44V176a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H80a4,4,0,0,0,0-8Zm136-40a4,4,0,0,0-4,4v36H176a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V176A4,4,0,0,0,216,172ZM40,84a4,4,0,0,0,4-4V44H80a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4V80A4,4,0,0,0,40,84Zm40-8h96a4,4,0,0,1,4,4v96a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V80A4,4,0,0,1,80,76Zm4,96h88V84H84Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
