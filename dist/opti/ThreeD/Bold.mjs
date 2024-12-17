var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const h = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M88,148a16,16,0,0,0-16-16,12,12,0,0,1-9.83-18.88L77,92H52a12,12,0,0,1,0-24h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,1,1,43.43,176,12,12,0,1,1,60.57,159.2,16,16,0,0,0,88,148Zm76-80a60,60,0,0,1,0,120H140a12,12,0,0,1-12-12V80a12,12,0,0,1,12-12Zm0,24H152v72h12a36,36,0,0,0,0-72ZM32,56H224a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24ZM224,200H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
