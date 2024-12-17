var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      h.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && h.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H164V180h16a12,12,0,0,0,0-24H164V140h16a12,12,0,0,0,0-24H164V100h16a12,12,0,0,0,0-24H164V52h40ZM80.49,23.51a12,12,0,0,0-17,0l-32,32A12,12,0,0,0,28,64V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V64a12,12,0,0,0-3.51-8.49ZM52,92H92v72H52ZM72,49,91,68H53ZM52,204V188H92v16Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
