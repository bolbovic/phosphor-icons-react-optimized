var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && H(a, e, t[e]);
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
import V, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ V.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M172,136a12,12,0,0,1-12,12H140v20a12,12,0,0,1-24,0V148H96a12,12,0,0,1,0-24h20V104a12,12,0,0,1,24,0v20h20A12,12,0,0,1,172,136Zm64-56V192a28,28,0,0,1-28,28H48a28,28,0,0,1-28-28V80A28,28,0,0,1,48,52H73.58L83.64,36.91A20,20,0,0,1,100.28,28h55.44a20,20,0,0,1,16.64,8.91L182.42,52H208A28,28,0,0,1,236,80Zm-24,0a4,4,0,0,0-4-4H176a12,12,0,0,1-10-5.34L153.58,52H102.42L90,70.66A12,12,0,0,1,80,76H48a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
