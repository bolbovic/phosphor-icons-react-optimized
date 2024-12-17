var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const L = n((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(B, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M240.49,83.51l-60-60a12,12,0,0,0-17,0L34.28,152.75a48.77,48.77,0,0,0,69,69L214.48,110.49l21.31-7.11a12,12,0,0,0,4.7-19.87ZM86.28,204.75a24.77,24.77,0,0,1-35-35l28.13-28.13c7.73-2.41,19.58-3,35.06,5a83.94,83.94,0,0,0,21.95,8ZM204.2,88.62a12.15,12.15,0,0,0-4.69,2.89l-38.89,38.9c-7.73,2.41-19.58,3-35.06-5a83.94,83.94,0,0,0-21.94-8L172,49l37.79,37.79Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
