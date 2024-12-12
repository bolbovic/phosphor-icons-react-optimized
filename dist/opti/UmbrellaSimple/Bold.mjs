var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    d.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const A = h((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M243.93,126.3A116.43,116.43,0,0,0,49,50.81a115.45,115.45,0,0,0-37,75.49A20,20,0,0,0,32,148h84v52a36,36,0,0,0,72,0,12,12,0,0,0-24,0,12,12,0,0,1-24,0V148h84a20,20,0,0,0,20-21.7ZM36.44,124A92.45,92.45,0,0,1,190.69,68.46,91.56,91.56,0,0,1,219.56,124Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
