var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    L.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var h = (e, t) => {
  var a = {};
  for (var l in e)
    L.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && c.call(e, l) && (a[l] = e[l]);
  return a;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((l, a) => {
  var m = l, { children: e } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M136,176,96,216,24,192l64-64Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M253.66,106.34a8,8,0,0,0-11.32,0L192,156.69,109.66,74.34h0L107.31,72l50.35-50.34a8,8,0,1,0-11.32-11.32L96,60.69A16,16,0,0,0,93.18,79.5L72,100.69a16,16,0,0,0,0,22.62L76.69,128,18.34,186.34a8,8,0,0,0,3.13,13.25l72,24A7.88,7.88,0,0,0,96,224a8,8,0,0,0,5.66-2.34L136,187.31l4.69,4.69a16,16,0,0,0,22.62,0l21.18-21.18A16,16,0,0,0,203.31,168l50.35-50.34A8,8,0,0,0,253.66,106.34ZM93.84,206.85l-55-18.35L88,139.31,124.69,176ZM152,180.69l-10.34-10.35h0l-48-48h0L83.31,112,104,91.31,172.69,160Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
