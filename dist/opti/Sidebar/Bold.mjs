var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && m(e, a, t[a]);
  return e;
};
var V = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, a) => {
  var H = o, { children: e } = H, t = V(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, l({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,104H72v20H44ZM72,60V80H44V60ZM44,148H72v48H44Zm168,48H96V60H212Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
