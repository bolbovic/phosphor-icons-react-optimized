var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && p(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM97.07,100.26a59.33,59.33,0,0,1,0,55.48,8,8,0,1,1-14.14-7.48,42.79,42.79,0,0,0,0-40.52,8,8,0,0,1,14.14-7.48Zm56-32a126.67,126.67,0,0,1,0,119.54A8,8,0,0,1,139,180.23a110.62,110.62,0,0,0,0-104.46,8,8,0,0,1,14.12-7.54Zm-28,16a93,93,0,0,1,0,87.52,8,8,0,1,1-14.12-7.52,77,77,0,0,0,0-72.48,8,8,0,1,1,14.12-7.52Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
