var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M92,144a16,16,0,1,1,16-16A16,16,0,0,1,92,144Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,112Zm-14.4,49.85a41,41,0,0,1-43.2,0,12,12,0,1,0-12.8,20.3,65,65,0,0,0,68.8,0,12,12,0,1,0-12.8-20.3ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84.08,84.08,0,0,0-82-83.95c-9.46,14.2-10,27.28-10,28A8,8,0,0,0,136,72a12,12,0,0,1,24,0,32,32,0,0,1-64,0c0-.63.1-10.48,5-23.52A84,84,0,1,0,212,128Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
