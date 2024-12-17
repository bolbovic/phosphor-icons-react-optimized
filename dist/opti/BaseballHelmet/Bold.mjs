var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M120,156a32,32,0,1,0-32,32A32,32,0,0,0,120,156Zm-40,0a8,8,0,1,1,8,8A8,8,0,0,1,80,156Zm164-40H227.34A108,108,0,0,0,12,128v24a76.08,76.08,0,0,0,76,76h40a76.08,76.08,0,0,0,76-76V140h40a12,12,0,0,0,0-24ZM36,152V128a84,84,0,0,1,167.15-12H152a12,12,0,0,0-12,12v24a52,52,0,0,1-104,0Zm144,0a52.07,52.07,0,0,1-33.67,48.65A75.63,75.63,0,0,0,164,152V140h16Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
