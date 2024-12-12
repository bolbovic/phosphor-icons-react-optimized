var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && r(e, a, t[a]);
  if (m)
    for (var a of m(t))
      Z.call(t, a) && r(e, a, t[a]);
  return e;
};
var l = (e, t) => {
  var a = {};
  for (var H in e)
    p.call(e, H) && t.indexOf(H) < 0 && (a[H] = e[H]);
  if (e != null && m)
    for (var H of m(e))
      t.indexOf(H) < 0 && Z.call(e, H) && (a[H] = e[H]);
  return a;
};
import V, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((H, a) => {
  var o = H, { children: e } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ V.createElement(i, d({ ref: a }, t), e, /* @__PURE__ */ V.createElement("path", { d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM44,116H76v24H44Zm56,0H212v24H100ZM212,68V92H44V68ZM44,164H76v24H44Zm56,24V164H212v24Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
