var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && Z(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && Z(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var r = o, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ l.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM112,164,64,128l48-36Zm64,0-48-36,48-36Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM115.58,84.84a8,8,0,0,0-8.38.76l-48,36a8,8,0,0,0,0,12.8l48,36A8,8,0,0,0,112,172a8,8,0,0,0,8-8V92A8,8,0,0,0,115.58,84.84ZM104,148,77.33,128,104,108Zm75.58-63.16a8,8,0,0,0-8.38.76l-48,36a8,8,0,0,0,0,12.8l48,36A8,8,0,0,0,176,172a8,8,0,0,0,8-8V92A8,8,0,0,0,179.58,84.84ZM168,148l-26.67-20L168,108Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
