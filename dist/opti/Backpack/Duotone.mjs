var Z = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (H)
    for (var e of H(t))
      A.call(t, e) && V(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && H)
    for (var o of H(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as c } from "react";
import n from "../../lib/OptiBase.mjs";
const i = c((o, e) => {
  var r = o, { children: a } = r, t = v(r, ["children"]);
  return /* @__PURE__ */ m.createElement(n, p({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M208,96V216a8,8,0,0,1-8,8H176V152a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v72H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48h64A48,48,0,0,1,208,96Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM112,24h32a8,8,0,0,1,8,8v8H104V32A8,8,0,0,1,112,24Zm56,136H88v-8a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM88,176h48v8a8,8,0,0,0,16,0v-8h16v40H88Zm112,40H184V152a24,24,0,0,0-24-24H96a24,24,0,0,0-24,24v64H56V96A40,40,0,0,1,96,56h64a40,40,0,0,1,40,40V216ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
