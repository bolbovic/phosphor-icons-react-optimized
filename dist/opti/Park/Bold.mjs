var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ v.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M232,188H204V172h20a12,12,0,0,0,11.64-14.91l-32-128a12,12,0,0,0-23.28,0l-32,128A12,12,0,0,0,160,172h20v16H116V176a12,12,0,0,0,0-24V140a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24v12a12,12,0,0,0,0,24v12H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM192,81.48,208.63,148H175.37ZM56,140H92v12H56Zm0,36H92v12H56Zm60-76A32,32,0,1,0,84,68,32,32,0,0,0,116,100Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,116,60Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
