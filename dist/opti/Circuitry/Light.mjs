var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var V in a)
    i.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      t.indexOf(V) < 0 && p.call(a, V) && (e[V] = a[V]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((V, e) => {
  var m = V, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ A.createElement(c, h({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM88,158a10,10,0,1,1-10,10A10,10,0,0,1,88,158ZM46,208V48a2,2,0,0,1,2-2H82V146.84a22,22,0,1,0,12,0V110.49l52,52V210H48A2,2,0,0,1,46,208Zm164,0a2,2,0,0,1-2,2H158V160a6,6,0,0,0-1.76-4.24L94,93.51V46h36V72a6,6,0,0,0,1.76,4.24l17,17a22,22,0,1,0,8.48-8.48L142,69.51V46h66a2,2,0,0,1,2,2ZM168,94a10,10,0,1,1-10,10A10,10,0,0,1,168,94Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
