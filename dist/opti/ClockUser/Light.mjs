var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M134,72v46.29l39.32-19.66a6,6,0,0,1,5.36,10.74l-48,24A6,6,0,0,1,122,128V72a6,6,0,0,1,12,0Zm-6,146a90,90,0,1,1,90-90,6,6,0,0,0,12,0A102,102,0,1,0,128,230a6,6,0,0,0,0-12Zm101.8,4.46a6,6,0,0,1-11.6,3.08C215.14,214,204.37,206,192,206s-23.14,8-26.2,19.54A6,6,0,0,1,160,230a6.26,6.26,0,0,1-1.54-.2,6,6,0,0,1-4.26-7.34A38.09,38.09,0,0,1,172.72,199a30,30,0,1,1,38.56,0A38.09,38.09,0,0,1,229.8,222.46ZM174,176a18,18,0,1,0,18-18A18,18,0,0,0,174,176Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
