var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var h = o, { children: a } = h, t = d(h, ["children"]);
  return /* @__PURE__ */ l.createElement(i, V({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M224,116h-8V72a20,20,0,0,0-20-20H156a20,20,0,0,0-20,20v44H120V48a20,20,0,0,0-20-20H60A20,20,0,0,0,40,48v68H32a12,12,0,0,0,0,24h8v68a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V140h16v44a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V140h8a12,12,0,0,0,0-24ZM96,204H64V52H96Zm96-24H160V76h32Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
