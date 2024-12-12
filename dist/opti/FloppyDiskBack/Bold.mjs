var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,28H83.31a19.86,19.86,0,0,0-14.14,5.86L33.86,69.17A19.86,19.86,0,0,0,28,83.31V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM92,52h72V72H92ZM204,204H52V85L68,69v7A20,20,0,0,0,88,96h80a20,20,0,0,0,20-20V52h16Zm-76-96a42,42,0,1,0,42,42A42,42,0,0,0,128,108Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,128,168Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
