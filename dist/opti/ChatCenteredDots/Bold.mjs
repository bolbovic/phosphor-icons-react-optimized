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
var H = (a, t) => {
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
const Z = i((m, e) => {
  var r = m, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M88,120a16,16,0,1,1,16,16A16,16,0,0,1,88,120Zm64,16a16,16,0,1,0-16-16A16,16,0,0,0,152,136Zm84-80V184a20,20,0,0,1-20,20H157.89l-12.52,21.92a20,20,0,0,1-34.74,0L98.11,204H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V180h61.07a12,12,0,0,1,10.42,6.05L128,207.94l12.51-21.89A12,12,0,0,1,150.93,180H212Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
