var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(V, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM87.51,104.49a12,12,0,0,1,17-17L148,131V112a12,12,0,0,1,24,0v48a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h19Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};