var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M178,78A84,84,0,1,0,78,178,84,84,0,1,0,178,78Zm-22.19,22.19a59.57,59.57,0,0,1-9.81,28.9L126.94,110A59.57,59.57,0,0,1,155.84,100.16Zm-79.5,52.51a60,60,0,1,1,76.33-76.33A84.11,84.11,0,0,0,76.34,152.67Zm23.82,3.17a59.57,59.57,0,0,1,9.81-28.9L129.06,146A59.57,59.57,0,0,1,100.16,155.84ZM160,220a60.09,60.09,0,0,1-56.67-40.34,84.11,84.11,0,0,0,76.33-76.33A60,60,0,0,1,160,220Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
