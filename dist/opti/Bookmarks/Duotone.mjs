var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      c.call(t, a) && l(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import V, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, a) => {
  var m = o, { children: e } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ V.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ V.createElement(
    "path",
    {
      d: "M200,40V192l-32-22.85V72a8,8,0,0,0-8-8H88V40a8,8,0,0,1,8-8h96A8,8,0,0,1,200,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ V.createElement("path", { d: "M192,24H96A16,16,0,0,0,80,40V56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V184.69l19.35,13.82A8,8,0,0,0,208,192V40A16,16,0,0,0,192,24ZM160,208.46l-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96Zm32-32L176,165V72a16,16,0,0,0-16-16H96V40h96Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
