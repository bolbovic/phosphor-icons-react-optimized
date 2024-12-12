var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var h = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import V, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((o, a) => {
  var m = o, { children: e } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ V.createElement(d, n({ ref: a }, t), e, /* @__PURE__ */ V.createElement("path", { d: "M224,104v48H48V104Z", opacity: "0.2" }), /* @__PURE__ */ V.createElement("path", { d: "M224,96H184V56a8,8,0,0,0-8-8H56V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,224,96ZM168,64V96H56V64ZM136,192H56V160h80Zm80-48H56V112H216Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
