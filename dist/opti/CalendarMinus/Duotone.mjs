var i = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (V)
    for (var e of V(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && V)
    for (var o of V(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((o, e) => {
  var H = o, { children: a } = H, t = h(H, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-48-56a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,152Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};