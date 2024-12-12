var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M164,80a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H176A12,12,0,0,1,164,80Zm76,84H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm0-48H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM148,64V192a20,20,0,0,1-20,20H88A84,84,0,0,1,4,127.37C4.34,81.4,42.43,44,88.9,44H128A20,20,0,0,1,148,64Zm-24,4H88.9C55.57,68,28.25,94.71,28,127.54A60,60,0,0,0,88,188h36Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
