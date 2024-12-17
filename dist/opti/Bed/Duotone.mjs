var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      V.call(a, t) && c(e, t, a[t]);
  return e;
};
var H = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && V.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const l = f((o, t) => {
  var p = o, { children: e } = p, a = H(p, ["children"]);
  return /* @__PURE__ */ m.createElement(h, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M248,112v56H112V80H216A32,32,0,0,1,248,112Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
