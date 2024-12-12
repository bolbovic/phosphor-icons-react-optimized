var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      Z.call(t, a) && l(e, a, t[a]);
  return e;
};
var h = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && Z.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as M } from "react";
import i from "../../lib/OptiBase.mjs";
const v = M((o, a) => {
  var p = o, { children: e } = p, t = h(p, ["children"]);
  return /* @__PURE__ */ m.createElement(i, c({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M232,80v68L156,72h68A8,8,0,0,1,232,80ZM32,72a8,8,0,0,0-8,8v4l76,76h72L84,72Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M224,64H32A16,16,0,0,0,16,80v72a16,16,0,0,0,16,16H56v32a8,8,0,0,0,16,0V168H184v32a8,8,0,0,0,16,0V168h24a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,64.69L175.31,80H224ZM80.69,80l72,72H103.31L32,80.69V80ZM32,103.31,80.69,152H32ZM224,152H175.31l-72-72h49.38L224,151.32V152Z" }));
});
v.displayName = "Duotone";
export {
  v as Duotone
};
