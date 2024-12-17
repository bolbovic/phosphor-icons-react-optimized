var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const d = A((c, e) => {
  var r = c, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M243.18,61.72a6,6,0,0,0-5.81-.3c-43.66,21.32-74.69,11.39-107.54.88C96.16,51.53,61.35,40.4,13.37,63.84A6,6,0,0,0,10,69.23v120a6,6,0,0,0,8.63,5.39c43.66-21.32,74.69-11.39,107.54-.88,19,6.09,38.46,12.3,60.42,12.3,16.85,0,35.21-3.66,56-13.84a6,6,0,0,0,3.37-5.39v-120A6,6,0,0,0,243.18,61.72ZM234,183c-41.9,19.21-72.17,9.53-104.17-.71C110.78,176.18,91.37,170,69.41,170c-14.49,0-30.08,2.7-47.41,9.92V73c41.9-19.21,72.17-9.53,104.17.71C157.78,83.84,190.41,94.28,234,76.11ZM128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146ZM54,96v48a6,6,0,0,1-12,0V96a6,6,0,1,1,12,0Zm148,64V112a6,6,0,0,1,12,0v48a6,6,0,0,1-12,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
