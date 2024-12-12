var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    v.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && V.call(a, H) && (e[H] = a[H]);
  return e;
};
import r, { forwardRef as Z } from "react";
import i from "../../lib/OptiBase.mjs";
const M = Z((H, e) => {
  var h = H, { children: a } = h, t = c(h, ["children"]);
  return /* @__PURE__ */ r.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M232,64V200H48a24,24,0,0,1,0-48H64V64Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M232,56H72V40a8,8,0,0,0-8-8H48A32,32,0,0,0,16,64V176a32,32,0,0,0,32,32H232a8,8,0,0,0,8-8V64A8,8,0,0,0,232,56ZM32,64A16,16,0,0,1,48,48h8v96H48a31.82,31.82,0,0,0-16,4.29ZM224,192H48a16,16,0,0,1,0-32H64a8,8,0,0,0,8-8V72H224ZM104,136a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16H176V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16Zm32-16h24v16H136Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
