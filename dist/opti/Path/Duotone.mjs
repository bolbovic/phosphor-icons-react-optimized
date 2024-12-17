var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    n.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const E = l((o, e) => {
  var p = o, { children: a } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M224,200a24,24,0,1,1-24-24A24,24,0,0,1,224,200Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
