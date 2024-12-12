var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var L = (a, t) => {
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
  var m = o, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ l.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M192,60a20,20,0,1,1-20-20A20,20,0,0,1,192,60Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M172,88a28,28,0,1,0-28-28A28,28,0,0,0,172,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,172,48ZM32.32,77.76a8,8,0,0,1,9.92-5.44L112,92.67l10.32-10.33a8,8,0,0,1,11.32,0L163.31,112H200a8,8,0,0,1,0,16H160a8,8,0,0,1-5.66-2.34L148.73,120l-111-32.36A8,8,0,0,1,32.32,77.76ZM236.44,204.24a69.78,69.78,0,0,1-58.37,8.95L21.76,167.67a8,8,0,1,1,4.48-15.36l76,22.13L128.73,148,85.8,135.69a8,8,0,0,1,4.4-15.39l56,16a8,8,0,0,1,3.46,13.35l-29.9,29.9,62.79,18.28a53.78,53.78,0,0,0,45-6.9,8,8,0,1,1,8.88,13.31Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
