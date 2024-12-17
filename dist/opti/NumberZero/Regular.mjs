var R = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, l = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && o(e, a, r[a]);
  if (c)
    for (var a of c(r))
      p.call(r, a) && o(e, a, r[a]);
  return e;
};
var f = (e, r) => {
  var a = {};
  for (var t in e)
    s.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && c)
    for (var t of c(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const S = d((t, a) => {
  var m = t, { children: e } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, l({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M183.25,63.2C170.25,42.79,151.15,32,128,32S85.75,42.79,72.75,63.2C62,80.18,56,103.19,56,128s6,47.82,16.75,64.8c13,20.41,32.1,31.2,55.25,31.2s42.25-10.79,55.25-31.2c10.8-17,16.75-40,16.75-64.8S194.05,80.18,183.25,63.2ZM128,208c-38.68,0-56-40.18-56-80s17.32-80,56-80,56,40.18,56,80S166.68,208,128,208Z" }));
});
S.displayName = "Regular";
export {
  S as Regular
};
