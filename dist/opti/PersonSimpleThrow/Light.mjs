var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var c = m, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,86A30,30,0,1,0,98,56,30,30,0,0,0,128,86Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,38ZM50,96a14,14,0,1,1,14,14A14,14,0,0,1,50,96Zm170.68,13.35a6,6,0,0,1-8.41,1c-1.17-.92-25.06-18.91-62.52.94a214.64,214.64,0,0,1-3.23,32.38l33.32,27.77a6,6,0,0,1,1.85,6.51l-16,48a6,6,0,0,1-11.38-3.8L169,178l-25.49-21.25a141,141,0,0,1-5.86,17.07C124.15,206,100,227.48,65.73,237.75A6.14,6.14,0,0,1,64,238a6,6,0,0,1-1.72-11.75c64.82-19.45,73.42-78.76,75.11-107.41C109,137.65,86.8,142,72.39,142c-11.71,0-18.29-2.86-18.88-3.13a6,6,0,1,1,5-10.92c.21.09,27.6,11.28,74.14-20.35,26.44-18,48.5-19,62.36-16.67,15.37,2.57,24.39,9.7,24.76,10A6,6,0,0,1,220.68,109.35Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
