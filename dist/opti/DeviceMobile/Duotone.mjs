var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var H = (e, a, t) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, V = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && H(e, t, a[t]);
  if (m)
    for (var t of m(a))
      n.call(a, t) && H(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const h = d((o, t) => {
  var p = o, { children: e } = p, a = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, V({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M192,56V200H64V56Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};