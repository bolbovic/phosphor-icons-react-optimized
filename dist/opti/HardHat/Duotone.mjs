var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && p(e, a, t[a]);
  if (V)
    for (var a of V(t))
      A.call(t, a) && p(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && V)
    for (var o of V(e))
      t.indexOf(o) < 0 && A.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as i } from "react";
import v from "../../lib/OptiBase.mjs";
const d = i((o, a) => {
  var r = o, { children: e } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ m.createElement(v, Z({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M104,51.31V160H40V136A88,88,0,0,1,104,51.31Zm48,0V160h64V136A88,88,0,0,0,152,51.31Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M224,152V136a96.37,96.37,0,0,0-64-90.51V40a16,16,0,0,0-16-16H112A16,16,0,0,0,96,40v5.49A96.37,96.37,0,0,0,32,136v16a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V168A16,16,0,0,0,224,152Zm-16-16v16H160V62.67A80.36,80.36,0,0,1,208,136ZM144,40V152H112V40ZM48,136A80.36,80.36,0,0,1,96,62.67V152H48Zm176,56H32V168H224v24Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
