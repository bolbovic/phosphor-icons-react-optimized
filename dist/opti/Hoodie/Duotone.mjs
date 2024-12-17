var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      L.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && L.call(a, o) && (e[o] = a[o]);
  return e;
};
import V, { forwardRef as n } from "react";
import Z from "../../lib/OptiBase.mjs";
const i = n((o, e) => {
  var r = o, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ V.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ V.createElement(
    "path",
    {
      d: "M231.72,131.51,210.28,210.1a8,8,0,0,1-7.71,5.9H176a8,8,0,0,1-8-8V184H88v24a8,8,0,0,1-8,8H53.43a8,8,0,0,1-7.71-5.9L24.28,131.51A8,8,0,0,1,25.34,125L72,55l56,33,56-33,46.66,70A8,8,0,0,1,231.72,131.51Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ V.createElement("path", { d: "M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,176V69l24,14.15V136a8,8,0,0,0,16,0V92.57l3.94,2.32a8,8,0,0,0,8.12,0L136,92.57V128a8,8,0,0,0,16,0V83.14L176,69V176ZM169.73,48l2.92,4.39L128,78.71,83.35,52.39,86.27,48ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm122.57,0H176V192a16,16,0,0,0,16-16V81.41l32,48Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
