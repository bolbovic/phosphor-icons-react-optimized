var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = R((t, e) => {
  var l = t, { children: a } = l, r = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(V, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V48H104V32ZM121.25,219.43a42.91,42.91,0,1,1-60.68-60.68l41.09-41.09A8,8,0,0,0,104,112V64h88v40.58A56.09,56.09,0,0,0,144,160a55.4,55.4,0,0,0,7.93,28.76ZM189.66,151l-25.91,25.91A39.6,39.6,0,0,1,160,160a40.05,40.05,0,0,1,32-39.19v24.56A8,8,0,0,1,189.66,151Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
