var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var m = o, { children: a } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ l.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M216,48V208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M240,120H224V48a16,16,0,0,0-18.86-15.74l-160,29.09A16,16,0,0,0,32,77.09V120H16a8,8,0,0,0,0,16H32v42.91a16,16,0,0,0,13.14,15.74l160,29.09A16.47,16.47,0,0,0,208,224a16,16,0,0,0,16-16V136h16a8,8,0,0,0,0-16ZM48,77.09,208,48v72H48ZM208,208,48,178.91V136H208Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
