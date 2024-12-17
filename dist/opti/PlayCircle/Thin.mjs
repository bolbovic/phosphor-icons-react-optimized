var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && i(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && n.call(e, m) && (a[m] = e[m]);
  return a;
};
import l, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, a) => {
  var o = m, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(d, c({ ref: a }, t), e, /* @__PURE__ */ l.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm46.12-95.39-64-40A4,4,0,0,0,104,88v80a4,4,0,0,0,2.06,3.5,4.06,4.06,0,0,0,1.94.5,4,4,0,0,0,2.12-.61l64-40a4,4,0,0,0,0-6.78ZM112,160.78V95.22L164.45,128Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
