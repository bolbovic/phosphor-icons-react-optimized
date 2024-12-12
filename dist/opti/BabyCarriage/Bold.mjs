var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && p(a, e, m[e]);
  if (o)
    for (var e of o(m))
      d.call(m, e) && p(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((t, e) => {
  var r = t, { children: a } = r, m = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M160,28h-8a20,20,0,0,0-20,20v52H58.16A40.07,40.07,0,0,0,20,72a12,12,0,0,0,0,24,16,16,0,0,1,16,16,84.09,84.09,0,0,0,84,84h40a84,84,0,0,0,0-168Zm48.06,48.12A59.58,59.58,0,0,1,218.79,100H178.21ZM160,52a59.66,59.66,0,0,1,29.83,8L156,87V52Zm0,120H120a60.1,60.1,0,0,1-58.79-48H218.79A60.1,60.1,0,0,1,160,172Zm-52,52a20,20,0,1,1-20-20A20,20,0,0,1,108,224Zm104,0a20,20,0,1,1-20-20A20,20,0,0,1,212,224Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
