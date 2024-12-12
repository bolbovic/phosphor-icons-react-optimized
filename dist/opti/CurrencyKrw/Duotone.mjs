var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var l in a)
    H.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && Z.call(a, l) && (e[l] = a[l]);
  return e;
};
import m, { forwardRef as i } from "react";
import M from "../../lib/OptiBase.mjs";
const d = i((l, e) => {
  var r = l, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ m.createElement(M, c({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M50,136h52L76,200Zm52,0h52L128,72Zm52,0,26,64,26-64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M240,128H217.89l21.52-53a8,8,0,1,0-14.82-6l-24,59H159.38l-24-59a8,8,0,0,0-14.82,0l-24,59H55.38l-24-59a8,8,0,0,0-14.82,6l21.52,53H16a8,8,0,0,0,0,16H44.61l24,59a8,8,0,0,0,14.82,0l24-59h41.24l24,59a8,8,0,0,0,14.82,0l24-59H240a8,8,0,0,0,0-16ZM76,178.75,61.88,144H90.12ZM113.88,128,128,93.26,142.12,128ZM180,178.75,165.88,144h28.24Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
