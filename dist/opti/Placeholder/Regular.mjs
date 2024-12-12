var R = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    l.call(r, a) && p(e, a, r[a]);
  if (m)
    for (var a of m(r))
      c.call(r, a) && p(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    l.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && c.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((t, a) => {
  var o = t, { children: e } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,208V59.31L196.69,208ZM59.31,48H208V196.7Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
