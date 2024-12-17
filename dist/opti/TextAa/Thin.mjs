var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as h } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var m = r, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ n.createElement(Z, s({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M83.62,54.3a4,4,0,0,0-7.24,0l-64,136a4,4,0,0,0,7.24,3.4L37.36,156h85.28l17.74,37.7a4,4,0,1,0,7.24-3.4ZM41.13,148,80,65.39,118.87,148ZM200,100c-11.67,0-20.69,3.08-26.82,9.16a4,4,0,1,0,5.64,5.68c4.57-4.54,11.7-6.84,21.18-6.84,15.44,0,28,10.77,28,24v11.92A37.78,37.78,0,0,0,200,132c-19.85,0-36,14.35-36,32s16.15,32,36,32a37.78,37.78,0,0,0,28-11.92V192a4,4,0,0,0,8,0V132C236,114.36,219.85,100,200,100Zm0,88c-15.44,0-28-10.77-28-24s12.56-24,28-24,28,10.77,28,24S215.44,188,200,188Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
