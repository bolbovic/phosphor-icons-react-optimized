var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import V, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var m = o, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ V.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M200,56V200H72a16,16,0,0,1-16-16V56Z", opacity: "0.2" }), /* @__PURE__ */ V.createElement("path", { d: "M213.38,221.92a8,8,0,0,1-11.3-.54L136,148.69V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V131.09L64,69.49V88a8,8,0,0,1-16,0V56a8,8,0,0,1,.72-3.31l-6.64-7.31A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM105.79,64H120V80.43a8,8,0,0,0,16,0V64h56V88a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H105.79a8,8,0,0,0,0,16Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
