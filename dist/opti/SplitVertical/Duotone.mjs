var Z = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (l)
    for (var e of l(t))
      h.call(t, e) && H(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var r = o, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M160,56H96l32-32ZM128,232l32-32H96Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M208,144H48a8,8,0,0,0,0,16h72v32H96a8,8,0,0,0-5.66,13.66l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,192H136V160h72a8,8,0,0,0,0-16Zm-80,76.69L115.31,208h25.38ZM48,112H208a8,8,0,0,0,0-16H136V64h24a8,8,0,0,0,5.66-13.66l-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,64h24V96H48a8,8,0,0,0,0,16Zm80-76.69L140.69,48H115.31Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
