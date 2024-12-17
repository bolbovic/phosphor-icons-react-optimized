var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var L = r, { children: a } = L, t = l(L, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0ZM230,91.55v72.9a13.92,13.92,0,0,1-4.1,9.9L174.35,225.9a13.92,13.92,0,0,1-9.9,4.1H91.55a13.92,13.92,0,0,1-9.9-4.1L30.1,174.35a13.92,13.92,0,0,1-4.1-9.9V91.55a13.92,13.92,0,0,1,4.1-9.9L81.65,30.1a13.92,13.92,0,0,1,9.9-4.1h72.9a13.92,13.92,0,0,1,9.9,4.1L225.9,81.65A13.92,13.92,0,0,1,230,91.55Zm-12,0a2,2,0,0,0-.59-1.42L165.87,38.59a2,2,0,0,0-1.42-.59H91.55a2,2,0,0,0-1.41.59L38.58,90.13A2,2,0,0,0,38,91.55v72.9a2,2,0,0,0,.59,1.42l51.54,51.54a2,2,0,0,0,1.42.59h72.9a2,2,0,0,0,1.41-.59l51.56-51.54a2,2,0,0,0,.58-1.42ZM128,162a10,10,0,1,0,10,10A10,10,0,0,0,128,162Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
