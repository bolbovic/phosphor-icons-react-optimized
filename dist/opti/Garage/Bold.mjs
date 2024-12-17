var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M240,188h-4V98.67A20,20,0,0,0,227.09,82l-88-58.66a19.94,19.94,0,0,0-22.18,0L28.91,82A20,20,0,0,0,20,98.67V188H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,100.81l84-56,84,56V188H196V120a12,12,0,0,0-12-12H72a12,12,0,0,0-12,12v68H44ZM172,132v16H140V132Zm-56,16H84V132h32ZM84,172h32v16H84Zm56,0h32v16H140Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
