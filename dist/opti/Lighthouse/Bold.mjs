var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && H(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && H(a, e, l[e]);
  return a;
};
var M = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var r = t, { children: a } = r, l = M(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, d({ ref: e }, l), a, /* @__PURE__ */ Z.createElement("path", { d: "M220,84a12,12,0,0,0-12,12v8H192.87l-4.93-49.2A12,12,0,0,0,184,47L141.1,8.89l-.3-.25a20,20,0,0,0-25.6,0l-.3.25L72,47a12,12,0,0,0-4,7.76L63.13,104H48V96a12,12,0,0,0-24,0v20a12,12,0,0,0,12,12H60.72l-8.63,86.1A20,20,0,0,0,72,236H184a20,20,0,0,0,19.9-21.95L195.28,128H220a12,12,0,0,0,12-12V96A12,12,0,0,0,220,84ZM128,29.36,144.46,44H111.54ZM90.86,68h74.28l3.61,36H140V96a12,12,0,0,0-24,0v8H87.25ZM76.42,212l3.21-32h96.74l3.21,32ZM174,156H82l2.8-28h86.32Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
