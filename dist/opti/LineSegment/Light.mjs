var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M213.23,42.77A30,30,0,0,0,167,80.54L80.54,167a30.07,30.07,0,0,0-37.77,3.81h0A30,30,0,1,0,89,175.46L175.46,89a30,30,0,0,0,37.77-46.25Zm-136.51,162a18,18,0,1,1,0-25.46A18,18,0,0,1,76.72,204.74Zm128-128a18,18,0,0,1-25.46,0h0a18,18,0,1,1,25.46,0Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
