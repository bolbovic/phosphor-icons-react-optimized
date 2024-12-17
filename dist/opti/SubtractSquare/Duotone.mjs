var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var h = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import V, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, a) => {
  var m = o, { children: e } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ V.createElement(f, n({ ref: a }, t), e, /* @__PURE__ */ V.createElement("path", { d: "M216,96V216H96V160h64V96Z", opacity: "0.2" }), /* @__PURE__ */ V.createElement("path", { d: "M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,48H152V152H48ZM208,208H104V168h56a8,8,0,0,0,8-8V104h40Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
