var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((l, e) => {
  var r = l, { children: a } = r, t = L(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M158,216a6,6,0,0,1-6,6H104a6,6,0,0,1,0-12h48A6,6,0,0,1,158,216Zm77.07-26.91L230.41,181a6,6,0,1,0-10.4,6l4.66,8.09a9.49,9.49,0,0,1,0,9.72,10.46,10.46,0,0,1-9.21,5.2H192a6,6,0,0,0,0,12h23.45a22.37,22.37,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM64,210H40.55a10.46,10.46,0,0,1-9.21-5.2,9.49,9.49,0,0,1,0-9.72L36,187a6,6,0,0,0-10.4-6l-4.66,8.08a21.53,21.53,0,0,0,0,21.72A22.37,22.37,0,0,0,40.55,222H64a6,6,0,0,0,0-12Zm138.18-60a6,6,0,0,0,5.2-9l-23-40a6,6,0,1,0-10.4,6l23,40A6,6,0,0,0,202.18,150ZM147.61,37.22a22.75,22.75,0,0,0-39.22,0L94.69,61a6,6,0,1,0,10.4,6l13.7-23.78a10.75,10.75,0,0,1,18.42,0L150.91,67a6,6,0,0,0,10.4-6ZM79.85,98.8A6,6,0,0,0,71.66,101l-23,40A6,6,0,1,0,59,147l23-40A6,6,0,0,0,79.85,98.8Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
