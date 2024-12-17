var M = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (l)
    for (var e of l(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const d = i((o, e) => {
  var r = o, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ m.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M104,180a28,28,0,1,1-28-28A28,28,0,0,1,104,180Zm76-28a28,28,0,1,0,28,28A28,28,0,0,0,180,152ZM166.11,51.29a8,8,0,0,0-12.7-.29L140.47,66a16,16,0,0,1-24.94,0L102.59,51a8,8,0,0,0-12.7.29L40,120H216Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M248,112H220.08l-47.5-65.41a16,16,0,0,0-25.31-.72l-12.85,14.9-.2.23a7.95,7.95,0,0,1-12.44,0l-.2-.23-12.85-14.9a16,16,0,0,0-25.31.72L35.92,112H8a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM96.34,56l.19.24,12.85,14.89a24,24,0,0,0,37.24,0l12.85-14.89c.06-.08.1-.16.17-.24l40.66,56H55.69ZM180,144a36,36,0,0,0-35.77,32H111.77a36,36,0,1,0-1.83,16h36.12A36,36,0,1,0,180,144ZM76,200a20,20,0,1,1,20-20A20,20,0,0,1,76,200Zm104,0a20,20,0,1,1,20-20A20,20,0,0,1,180,200Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
