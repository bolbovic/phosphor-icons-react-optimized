var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
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
import H from "../../lib/OptiBase.mjs";
const h = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M132,136v64a12,12,0,0,1-24,0V165L48.49,224.49a12,12,0,0,1-17-17L91,148H56a12,12,0,0,1,0-24h64A12,12,0,0,1,132,136ZM208,28H80A20,20,0,0,0,60,48V92a12,12,0,0,0,24,0V52H204V172H164a12,12,0,0,0,0,24h44a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
