var M = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (c)
    for (var e of c(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const s = Z((r, e) => {
  var h = r, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ A.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M152,34h24a10,10,0,0,0,10-10,6,6,0,0,1,12,0,22,22,0,0,1-22,22H152a10,10,0,0,0-10,10,6,6,0,0,1-12,0A22,22,0,0,1,152,34ZM104,62a6,6,0,0,0,6-6,42,42,0,0,1,42-42h8a6,6,0,0,0,0-12h-8A54.06,54.06,0,0,0,98,56,6,6,0,0,0,104,62ZM246,216a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H34c14-28,30.2-69.68,31.88-114.59A13.92,13.92,0,0,1,79.85,82h88.33a14,14,0,0,1,14,13.37C184.32,144.45,206.92,190,218.28,210H240A6,6,0,0,1,246,216ZM168.18,94H150c.06.46.1.94.12,1.41C151.82,140.32,168,182,182,210h22.55c-12.44-23.1-32.32-66.9-34.4-114.11A2,2,0,0,0,168.18,94ZM47.34,210H168.66c-13.86-28.94-28.86-69.92-30.51-114.14a2,2,0,0,0-2-1.86H79.85a2,2,0,0,0-2,1.86C76.2,140.08,61.2,181.06,47.34,210Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
