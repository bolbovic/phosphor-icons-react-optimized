var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      V.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    v.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M244,104V72a20,20,0,0,0-20-20H32A20,20,0,0,0,12,72v32a20,20,0,0,0-8,16v48a20,20,0,0,0,20,20h4v12a12,12,0,0,0,24,0V188H204v12a12,12,0,0,0,24,0V188h4a20,20,0,0,0,20-20V120A20,20,0,0,0,244,104Zm-24-4H208a20,20,0,0,0-20,20v4H140V76h80ZM116,76v48H68v-4a20,20,0,0,0-20-20H36V76Zm112,88H28V124H44v12a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V124h16Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
