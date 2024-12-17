var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? A(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
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
import s, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((t, a) => {
  var o = t, { children: e } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-104c-.61,0-1.22,0-1.82,0L142.87,84.1a8,8,0,0,0-13.74-8.2l-32.23,54A36,36,0,1,0,128,112Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,128,168Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
