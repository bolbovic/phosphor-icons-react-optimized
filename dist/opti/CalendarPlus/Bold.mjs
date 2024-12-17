var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var V in a)
    H.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && o)
    for (var V of o(a))
      t.indexOf(V) < 0 && p.call(a, V) && (e[V] = a[V]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((V, e) => {
  var r = V, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ l.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm112-52a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V164H104a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,152Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
