var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const M = v((m, e) => {
  var c = m, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ s.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M242.12,63.39a4,4,0,0,0-3.88-.2c-44.37,21.68-75.77,11.64-109,1s-67.71-21.67-115,1.42A4,4,0,0,0,12,69.21v120a4,4,0,0,0,5.76,3.6c44.37-21.68,75.77-11.64,109-1,18.86,6,38.08,12.19,59.8,12.19,16.61,0,34.69-3.6,55.18-13.61a4,4,0,0,0,2.24-3.6v-120A4,4,0,0,0,242.12,63.39ZM236,184.27c-43.19,20.27-74.1,10.38-106.78-.08-18.86-6-38.08-12.18-59.8-12.18-15,0-31.28,3-49.42,10.94V71.73c43.19-20.27,74.1-10.38,106.78.08C158.7,82,191.67,92.57,236,73.05ZM128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148ZM52,96v48a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Zm152,64V112a4,4,0,0,1,8,0v48a4,4,0,0,1-8,0Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
