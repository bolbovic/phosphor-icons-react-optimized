var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (m)
    for (var t of m(a))
      l.call(a, t) && p(e, t, a[t]);
  return e;
};
var A = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && l.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = H((o, t) => {
  var V = o, { children: e } = V, a = A(V, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, n({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M192,64V75.64A8,8,0,0,1,188.82,82L128,128,67.2,82.4A8,8,0,0,1,64,76V64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M184,24H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64V40A16,16,0,0,0,184,24Zm0,16V56H72V40Zm0,176H72V180l56-42,56,42.35Zm-56-98L72,76V72H184v3.64Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
