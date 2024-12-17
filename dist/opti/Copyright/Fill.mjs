var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var m in e)
    i.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && p.call(e, m) && (a[m] = e[m]);
  return a;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((m, a) => {
  var l = m, { children: e } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,104a31.8,31.8,0,0,0,25.61-12.8,8,8,0,1,1,12.79,9.61,48,48,0,1,1,0-57.63,8,8,0,1,1-12.79,9.61A32,32,0,1,0,128,160Zm0-136A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
