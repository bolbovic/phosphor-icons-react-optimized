var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, h, e) => h in a ? s(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, p = (a, h) => {
  for (var e in h || (h = {}))
    o.call(h, e) && l(a, e, h[e]);
  if (m)
    for (var e of m(h))
      i.call(h, e) && l(a, e, h[e]);
  return a;
};
var c = (a, h) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      h.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const V = v((t, e) => {
  var r = t, { children: a } = r, h = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, h), a, /* @__PURE__ */ f.createElement("path", { d: "M160,152a16,16,0,0,1-16,16h-8V136h8A16,16,0,0,1,160,152Zm72-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-56,24a32,32,0,0,0-32-32h-8V88h4a16,16,0,0,1,16,16,8,8,0,0,0,16,0,32,32,0,0,0-32-32h-4V64a8,8,0,0,0-16,0v8h-4a32,32,0,0,0,0,64h4v32h-8a16,16,0,0,1-16-16,8,8,0,0,0-16,0,32,32,0,0,0,32,32h8v8a8,8,0,0,0,16,0v-8h8A32,32,0,0,0,176,152Zm-76-48a16,16,0,0,0,16,16h4V88h-4A16,16,0,0,0,100,104Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};
