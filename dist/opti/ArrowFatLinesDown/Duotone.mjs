var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && h(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((o, e) => {
  var p = o, { children: a } = p, t = n(p, ["children"]);
  return /* @__PURE__ */ m.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M224,136l-96,96L32,136H80V104h96v32Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M231.39,132.94A8,8,0,0,0,224,128H184V104a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v24H32a8,8,0,0,0-5.66,13.66l96,96a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,231.39,132.94ZM128,220.69,51.31,144H80a8,8,0,0,0,8-8V112h80v24a8,8,0,0,0,8,8h28.69ZM72,40a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,40Zm0,32a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,72Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
