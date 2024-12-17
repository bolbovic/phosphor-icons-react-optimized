var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var m = r, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M62.62,195.05l-9.45,16A6,6,0,0,1,42.83,205l9.46-16a6,6,0,1,1,10.33,6.1ZM232,154H183.06l-31.31-53a6,6,0,1,0-10.33,6.11l61.41,103.93a6,6,0,0,0,10.34-6.1l-23-38.95H232a6,6,0,0,0,0-12Zm-89.53,0H86.88L157.17,35.05A6,6,0,0,0,146.83,29L128,60.82,109.17,29a6,6,0,0,0-10.34,6.1L121,72.62,72.94,154H24a6,6,0,0,0,0,12H142.47a6,6,0,1,0,0-12Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
