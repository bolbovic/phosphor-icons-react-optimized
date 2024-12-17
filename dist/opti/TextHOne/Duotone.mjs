var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && V(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const h = f((o, e) => {
  var p = o, { children: a } = p, t = l(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,72V208H56a16,16,0,0,1-16-16V56H208A16,16,0,0,1,224,72Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm75.77,49a8,8,0,0,0-8.21.39l-24,16a8,8,0,1,0,8.88,13.32L216,127V208a8,8,0,0,0,16,0V112A8,8,0,0,0,227.77,105Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
