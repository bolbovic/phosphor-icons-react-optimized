var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M230.17,13.71a12,12,0,0,0-11.82-.3L101,76H32A20,20,0,0,0,12,96V200a20,20,0,0,0,20,20h88a20,20,0,0,0,20-20V168a11.86,11.86,0,0,0-.51-3.45L118.32,94,212,44V156H200v-4a12,12,0,0,0-24,0v8a20,20,0,0,0,20,20h20a20,20,0,0,0,20-20V24A12,12,0,0,0,230.17,13.71ZM95.07,100l16.8,56H76V100ZM52,100v56H36V100ZM36,196V180h80v16Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
