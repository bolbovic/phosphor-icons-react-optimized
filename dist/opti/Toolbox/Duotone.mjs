var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var v in a)
    p.call(a, v) && t.indexOf(v) < 0 && (e[v] = a[v]);
  if (a != null && o)
    for (var v of o(a))
      t.indexOf(v) < 0 && c.call(a, v) && (e[v] = a[v]);
  return e;
};
import H, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = M((v, e) => {
  var r = v, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ H.createElement(V, n({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M232,120v72a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V120Z", opacity: "0.2" }), /* @__PURE__ */ H.createElement("path", { d: "M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM32,80H224v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32ZM224,192H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
