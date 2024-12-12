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
var L = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var l = m, { children: a } = l, t = L(l, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,70A30,30,0,1,0,98,40,30,30,0,0,0,128,70Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,22ZM229.55,88.14A17.66,17.66,0,0,0,212,74H44a18,18,0,0,0-7.55,34.34l.1,0,52.32,23-21.44,81.5A18,18,0,0,0,84,238a18.07,18.07,0,0,0,16.19-10.14L128,180l27.81,47.91a18,18,0,0,0,32.73-14.94l-21.44-81.5,52.32-23,.1,0A17.66,17.66,0,0,0,229.55,88.14Zm-15,9.29-56.95,25.08a6,6,0,0,0-3.39,7l22.87,86.93a7.66,7.66,0,0,0,.37,1,6,6,0,0,1-10.88,5.07,4.3,4.3,0,0,0-.24-.48L133.19,165a6,6,0,0,0-10.38,0L89.69,222.05c-.09.16-.17.31-.25.48a6,6,0,0,1-8,2.9,6,6,0,0,1-2.9-8,7.66,7.66,0,0,0,.37-1l22.87-86.93a6,6,0,0,0-3.39-7L41.47,97.43A6,6,0,0,1,44,86H212a6,6,0,0,1,2.56,11.43Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
