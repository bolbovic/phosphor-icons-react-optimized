var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    n.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var p = o, { children: a } = p, t = l(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M200,192a24,24,0,1,1-24-24A24,24,0,0,1,200,192Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H160a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm135.66-57.7a8,8,0,0,1-10,5.36L208,122.75V192a32.05,32.05,0,1,1-16-27.69V112a8,8,0,0,1,10.3-7.66l40,12A8,8,0,0,1,247.66,126.3ZM192,192a16,16,0,1,0-16,16A16,16,0,0,0,192,192Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
