var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var c = m, { children: a } = c, t = H(c, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M224,130H32a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V144A14,14,0,0,0,224,130ZM30,176V144a2,2,0,0,1,2-2H82v36H32A2,2,0,0,1,30,176Zm196,0a2,2,0,0,1-2,2H94V142H224a2,2,0,0,1,2,2ZM202.77,61.06c7.81-13.88,7.91-21.91,6.62-26.2a9,9,0,0,0-3.93-5.42A6,6,0,0,1,208,18a5.87,5.87,0,0,1,2.44.52,20.42,20.42,0,0,1,10.23,12.24c3.18,9.58.68,21.75-7.44,36.18-7.81,13.88-7.91,21.91-6.62,26.2a8.94,8.94,0,0,0,3.88,5.4A6,6,0,0,1,208,110a5.87,5.87,0,0,1-2.44-.52,20.42,20.42,0,0,1-10.23-12.24C192.15,87.66,194.65,75.49,202.77,61.06Zm-40,0c7.81-13.88,7.91-21.91,6.62-26.2a9,9,0,0,0-3.93-5.42A6,6,0,0,1,168,18a5.87,5.87,0,0,1,2.44.52,20.42,20.42,0,0,1,10.23,12.24c3.18,9.58.68,21.75-7.44,36.18-7.81,13.88-7.91,21.91-6.62,26.2a8.94,8.94,0,0,0,3.88,5.4A6,6,0,0,1,168,110a5.87,5.87,0,0,1-2.44-.52,20.42,20.42,0,0,1-10.23-12.24C152.15,87.66,154.65,75.49,162.77,61.06Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
