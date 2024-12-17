var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M196,136a16,16,0,1,1-16-16A16,16,0,0,1,196,136Zm40-36v80a32,32,0,0,1-32,32H60a32,32,0,0,1-32-32V60.92A32,32,0,0,1,60,28H192a12,12,0,0,1,0,24H60a8,8,0,0,0-8,8.26v.08A8.32,8.32,0,0,0,60.48,68H204A32,32,0,0,1,236,100Zm-24,0a8,8,0,0,0-8-8H60.48A33.72,33.72,0,0,1,52,90.92V180a8,8,0,0,0,8,8H204a8,8,0,0,0,8-8Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
