var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var l = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import h, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, a) => {
  var m = o, { children: e } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ h.createElement(f, i({ ref: a }, t), e, /* @__PURE__ */ h.createElement("path", { d: "M200,176H56L80,40h96Z", opacity: "0.2" }), /* @__PURE__ */ h.createElement("path", { d: "M216,168h-9.29L185.54,48H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16h6.46L49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h80a8,8,0,0,0,0-16ZM86.71,48h82.58l21.17,120H65.54Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
