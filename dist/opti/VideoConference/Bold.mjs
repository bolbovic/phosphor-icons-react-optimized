var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && Z(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ d.createElement(h, V({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,80H156V60h56ZM52,120a12,12,0,1,1,12,12A12,12,0,0,1,52,120Zm-8,49.77C46.69,161.84,55,156,64,156c9.43,0,18.19,6.44,20.38,15a12,12,0,0,0,23.24-6,43.22,43.22,0,0,0-15.16-23A36,36,0,0,0,44,90.08V60h88V196H44ZM156,196V140h56v56ZM168,88a16,16,0,1,1,16,16A16,16,0,0,1,168,88Zm32,80a16,16,0,1,1-16-16A16,16,0,0,1,200,168Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
