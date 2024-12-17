var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      V.call(t, a) && c(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && V.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((o, a) => {
  var p = o, { children: e } = p, t = H(p, ["children"]);
  return /* @__PURE__ */ m.createElement(l, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M196,200H88V64h80V172A28,28,0,0,0,196,200Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M232,172a36,36,0,0,1-72,0V72H96V200a8,8,0,0,1-16,0V72H72a40,40,0,0,0-40,40,8,8,0,0,1-16,0A56.06,56.06,0,0,1,72,56H224a8,8,0,0,1,0,16H176V172a20,20,0,0,0,40,0,8,8,0,0,1,16,0Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
