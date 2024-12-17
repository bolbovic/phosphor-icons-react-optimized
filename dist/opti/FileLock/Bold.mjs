var v = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var r = m, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, H({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M120,168h-4v-4a32,32,0,0,0-64,0v4H48a12,12,0,0,0-12,12v44a12,12,0,0,0,12,12h72a12,12,0,0,0,12-12V180A12,12,0,0,0,120,168Zm-44-4a8,8,0,0,1,16,0v4H76Zm32,48H60V192h48ZM216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212H164a12,12,0,0,0,0,24h36a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
