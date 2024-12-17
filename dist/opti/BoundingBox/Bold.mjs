var d = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? d(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, v = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && m(a, e, H[e]);
  if (t)
    for (var e of t(H))
      r.call(H, e) && m(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var h in a)
    o.call(a, h) && H.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && t)
    for (var h of t(a))
      H.indexOf(h) < 0 && r.call(a, h) && (e[h] = a[h]);
  return e;
};
import Z, { forwardRef as l } from "react";
import c from "../../lib/OptiBase.mjs";
const f = l((h, e) => {
  var V = h, { children: a } = V, H = p(V, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, v({ ref: e }, H), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,100a20,20,0,0,0,20-20V48a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H100V48A20,20,0,0,0,80,28H48A20,20,0,0,0,28,48V80a20,20,0,0,0,20,20h4v56H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20v-4h56v4a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20h-4V100ZM180,52h24V76H180ZM52,52H76V76H52ZM76,204H52V180H76Zm128,0H180V180h24Zm-24-48h-4a20,20,0,0,0-20,20v4H100v-4a20,20,0,0,0-20-20H76V100h4a20,20,0,0,0,20-20V76h56v4a20,20,0,0,0,20,20h4Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
