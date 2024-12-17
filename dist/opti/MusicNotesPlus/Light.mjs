var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var V = m, { children: a } = V, t = l(V, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M230,48a6,6,0,0,1-6,6H206V72a6,6,0,0,1-12,0V54H176a6,6,0,0,1,0-12h18V24a6,6,0,0,1,12,0V42h18A6,6,0,0,1,230,48Zm-16,64v52a34.06,34.06,0,1,1-12-25.89V112a6,6,0,0,1,12,0Zm-12,52a22,22,0,1,0-22,22A22,22,0,0,0,202,164ZM86,108.68V196a34.06,34.06,0,1,1-12-25.89V56a6,6,0,0,1,4.54-5.82l56-14a6,6,0,1,1,2.92,11.64L86,60.68V96.32l72.54-18.14a6,6,0,1,1,2.92,11.64ZM74,196a22,22,0,1,0-22,22A22,22,0,0,0,74,196Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
