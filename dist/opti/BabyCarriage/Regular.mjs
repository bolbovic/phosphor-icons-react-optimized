var h = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && l(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && l(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var o = r, { children: a } = o, m = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, A({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M160,32h-8a16,16,0,0,0-16,16v56H55.2A40.07,40.07,0,0,0,16,72a8,8,0,0,0,0,16,24,24,0,0,1,24,24,80.09,80.09,0,0,0,80,80h40a80,80,0,0,0,0-160Zm63.48,72H166.81l41.86-33.49A63.73,63.73,0,0,1,223.48,104ZM160,48a63.59,63.59,0,0,1,36.69,11.61L152,95.35V48Zm0,128H120a64.09,64.09,0,0,1-63.5-56h167A64.09,64.09,0,0,1,160,176Zm-56,48a16,16,0,1,1-16-16A16,16,0,0,1,104,224Zm104,0a16,16,0,1,1-16-16A16,16,0,0,1,208,224Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
