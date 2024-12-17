var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && c(e, a, t[a]);
  if (o)
    for (var a of o(t))
      d.call(t, a) && c(e, a, t[a]);
  return e;
};
var l = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && d.call(e, m) && (a[m] = e[m]);
  return a;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, a) => {
  var r = m, { children: e } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, h({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,1.34,0,2.68-.06,4H140V60h64ZM52,60h64v56H52.06c0-1.32-.06-2.66-.06-4Zm3,80h61v74.29a127,127,0,0,1-25.09-16.14C72.22,182.61,60.2,163.13,55,140Zm110.1,58.15A127,127,0,0,1,140,214.29V140h61C195.8,163.13,183.78,182.61,165.09,198.15Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
