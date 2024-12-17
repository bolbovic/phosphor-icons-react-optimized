var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M178,78A84,84,0,1,0,78,178,84,84,0,1,0,178,78ZM220,160a60.75,60.75,0,0,1-.38,6.65l-44-44a83.62,83.62,0,0,0,4-19.39A59.83,59.83,0,0,1,220,160ZM36,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,36,96Zm67.28,83.66a83.62,83.62,0,0,0,19.39-4l44,44A60.75,60.75,0,0,1,160,220,59.83,59.83,0,0,1,103.28,179.66Zm88.53,31.18-46.73-46.73a85,85,0,0,0,19-19l46.73,46.73A60.45,60.45,0,0,1,191.81,210.84Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
