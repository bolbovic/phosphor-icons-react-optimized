var L = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (H)
    for (var e of H(t))
      A.call(t, e) && h(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const l = c((r, e) => {
  var m = r, { children: a } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ p.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M224,66H154L125.73,44.8a14,14,0,0,0-8.4-2.8H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H192.89A13.12,13.12,0,0,0,206,200.89V182h18.89A13.12,13.12,0,0,0,238,168.89V80A14,14,0,0,0,224,66ZM194,200.89a1.11,1.11,0,0,1-1.11,1.11H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H85.33a2,2,0,0,1,1.2.4l29.87,22.4A6,6,0,0,0,120,110h72a2,2,0,0,1,2,2Zm32-32a1.11,1.11,0,0,1-1.11,1.11H206V112a14,14,0,0,0-14-14H122L93.73,76.8a14,14,0,0,0-8.4-2.8H70V56a2,2,0,0,1,2-2h45.33a2,2,0,0,1,1.2.4L148.4,76.8A6,6,0,0,0,152,78h72a2,2,0,0,1,2,2Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
