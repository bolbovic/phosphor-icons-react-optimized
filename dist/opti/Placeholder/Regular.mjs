var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (m)
    for (var a of m(t))
      f.call(t, a) && l(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && f.call(e, r) && (a[r] = e[r]);
  return a;
};
import d, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const n = R((r, a) => {
  var o = r, { children: e } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ d.createElement(V, s({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,208V59.31L196.69,208ZM59.31,48H208V196.7Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
