var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && H(e, a, t[a]);
  if (V)
    for (var a of V(t))
      Z.call(t, a) && H(e, a, t[a]);
  return e;
};
var h = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && V)
    for (var o of V(e))
      t.indexOf(o) < 0 && Z.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as M } from "react";
import i from "../../lib/OptiBase.mjs";
const v = M((o, a) => {
  var r = o, { children: e } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ m.createElement(i, c({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M208,104v80H48V104Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM56,112H200v64H56ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32ZM80,64h96a24,24,0,0,1,24,24v8H56V88A24,24,0,0,1,80,64Zm96,160H80a24,24,0,0,1-24-24v-8H200v8A24,24,0,0,1,176,224Z" }));
});
v.displayName = "Duotone";
export {
  v as Duotone
};
