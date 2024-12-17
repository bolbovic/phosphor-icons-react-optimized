var n = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (h)
    for (var e of h(t))
      V.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && h)
    for (var o of h(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as v } from "react";
import i from "../../lib/OptiBase.mjs";
const l = v((o, e) => {
  var r = o, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ m.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M48,184h72v40H48ZM152,32V88h56Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M120,176h-8v-4a28,28,0,0,0-56,0v4H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V184A8,8,0,0,0,120,176Zm-48-4a12,12,0,0,1,24,0v4H72Zm40,44H56V192h56ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H160a8,8,0,0,0,0,16h40a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
