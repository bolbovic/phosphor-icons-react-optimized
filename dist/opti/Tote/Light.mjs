var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ c.createElement(v, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M234.47,70.73A14.09,14.09,0,0,0,223.92,66H174V64a46,46,0,0,0-92,0v2H32.08a14,14,0,0,0-14,15.64l14.25,120a14.06,14.06,0,0,0,14,12.36H209.67a14.06,14.06,0,0,0,14-12.36l14.25-120A14,14,0,0,0,234.47,70.73ZM94,64a34,34,0,0,1,68,0v2H94ZM211.73,200.23a2,2,0,0,1-2.06,1.77H46.33a2,2,0,0,1-2.06-1.77L30,80.23a1.92,1.92,0,0,1,.49-1.53,2.07,2.07,0,0,1,1.58-.7H82v26a6,6,0,0,0,12,0V78h68v26a6,6,0,0,0,12,0V78h49.92a2.07,2.07,0,0,1,1.58.7,1.92,1.92,0,0,1,.49,1.53Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
