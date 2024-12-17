var p = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var Z = (a, e, H) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, A = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && Z(a, H, e[H]);
  if (t)
    for (var H of t(e))
      V.call(e, H) && Z(a, H, e[H]);
  return a;
};
var o = (a, e) => {
  var H = {};
  for (var m in a)
    r.call(a, m) && e.indexOf(m) < 0 && (H[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && V.call(a, m) && (H[m] = a[m]);
  return H;
};
import i, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((m, H) => {
  var h = m, { children: a } = h, e = o(h, ["children"]);
  return /* @__PURE__ */ i.createElement(c, A({ ref: H }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M240,210H230V72a6,6,0,0,0-6-6H182V40a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6V98H32a6,6,0,0,0-6,6V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,110H80a6,6,0,0,0,6-6V46h84V72a6,6,0,0,0,6,6h42V210H150V168a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6v42H38ZM138,210H118V174h20ZM114,72a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,72Zm0,32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,104Zm56,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,104ZM86,136a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H80A6,6,0,0,1,86,136Zm0,32a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H80A6,6,0,0,1,86,168Zm28-32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,136Zm56,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,136Zm0,32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,168Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
