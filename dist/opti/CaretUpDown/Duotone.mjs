var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (m)
    for (var t of m(a))
      h.call(a, t) && p(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && h.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, t) => {
  var l = o, { children: e } = l, a = Z(l, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M80,176h96l-48,48ZM128,32,80,80h96Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Zm-48,44.69L99.31,184h57.38ZM80,88h96a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,80,88Zm48-44.69L156.69,72H99.31Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
