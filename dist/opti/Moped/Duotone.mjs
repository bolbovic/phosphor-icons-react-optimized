var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as i } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = i((o, e) => {
  var m = o, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ l.createElement(M, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M131,168H8a48,48,0,0,1,32-45.27V96h64Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M216,128a39.3,39.3,0,0,0-6.27.5L175.49,37.19A8,8,0,0,0,168,32H136a8,8,0,0,0,0,16h26.46l32.3,86.13a40.13,40.13,0,0,0-18,25.87H136.54l-25-66.81A8,8,0,0,0,104,88H24a8,8,0,0,0,0,16h8v13.39A56.12,56.12,0,0,0,0,168a8,8,0,0,0,8,8h8.8a40,40,0,0,0,78.4,0h81.6A40,40,0,1,0,216,128ZM56,192a24,24,0,0,1-22.62-16H78.62A24,24,0,0,1,56,192ZM16.81,160a40.07,40.07,0,0,1,25.86-29.73A8,8,0,0,0,48,122.73V104H98.46l21,56ZM216,192a24,24,0,0,1-15.43-42.36l7.94,21.17a8,8,0,0,0,15-5.62L215.55,144H216a24,24,0,0,1,0,48Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
