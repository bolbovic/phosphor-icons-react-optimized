var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const E = s((o, t) => {
  var p = o, { children: e } = p, a = f(p, ["children"]);
  return /* @__PURE__ */ m.createElement(V, d({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
