var R = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && l(e, a, r[a]);
  if (m)
    for (var a of m(r))
      c.call(r, a) && l(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && c.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((t, a) => {
  var o = t, { children: e } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
