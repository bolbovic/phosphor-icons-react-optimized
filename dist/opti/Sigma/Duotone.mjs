var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((o, a) => {
  var m = o, { children: e } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ l.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ l.createElement("path", { d: "M192,48V208H64l64-80L64,48Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M184,72V56H80.65l53.6,67a8,8,0,0,1,0,10l-53.6,67H184V184a8,8,0,0,1,16,0v24a8,8,0,0,1-8,8H64a8,8,0,0,1-6.25-13l60-75-60-75A8,8,0,0,1,64,40H192a8,8,0,0,1,8,8V72a8,8,0,0,1-16,0Z" }));
});
V.displayName = "Duotone";
export {
  V as Duotone
};
