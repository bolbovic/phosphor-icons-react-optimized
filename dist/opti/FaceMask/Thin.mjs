var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M172,104a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h80A4,4,0,0,1,172,104Zm-4,28H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Zm84-28v24a28,28,0,0,1-28,28h-7.84c-6.41,16-20.74,29.76-42.37,40.58a187.14,187.14,0,0,1-45.07,15.36,4.35,4.35,0,0,1-1.44,0,187.14,187.14,0,0,1-45.07-15.36C60.58,185.76,46.25,172,39.84,156H32A28,28,0,0,1,4,128V104A28,28,0,0,1,32,76h4.06A12,12,0,0,1,43.9,65.81l80-29.09a12,12,0,0,1,8.2,0l80,29.09A12,12,0,0,1,219.94,76H224A28,28,0,0,1,252,104ZM37.35,148A53.71,53.71,0,0,1,36,136V84H32a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20ZM212,136V77.09a4,4,0,0,0-2.63-3.76l-80-29.09a4,4,0,0,0-2.74,0l-80,29.09A4,4,0,0,0,44,77.09V136c0,49.42,75.76,66.24,84,67.92C136.24,202.24,212,185.42,212,136Zm32-32a20,20,0,0,0-20-20h-4v52a53.71,53.71,0,0,1-1.35,12H224a20,20,0,0,0,20-20Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
