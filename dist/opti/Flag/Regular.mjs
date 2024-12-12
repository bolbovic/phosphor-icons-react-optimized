var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, f = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && o(e, a, t[a]);
  if (c)
    for (var a of c(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var r in e)
    l.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import d, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const n = R((r, a) => {
  var m = r, { children: e } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ d.createElement(V, f({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
