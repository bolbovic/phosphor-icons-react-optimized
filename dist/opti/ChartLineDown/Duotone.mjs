var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      s.call(t, e) && m(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && s.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const f = H((l, e) => {
  var r = l, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M224,64V208H32V48H208A16,16,0,0,1,224,64Z", opacity: "0.2" }), /* @__PURE__ */ c.createElement("path", { d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V60.69l56,56,26.34-26.35a8,8,0,0,1,11.32,0L192,148.69V128a8,8,0,0,1,16,0v40a7,7,0,0,1,0,.8c0,.11,0,.21-.05.32s0,.3-.07.46a2.83,2.83,0,0,1-.09.37c0,.13-.06.26-.1.39s-.08.23-.12.35l-.14.39-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39-.21.28-.26.35c-.11.14-.24.27-.36.4l-.16.18-.17.15a4.83,4.83,0,0,1-.42.37,3.92,3.92,0,0,1-.32.25l-.3.22-.38.23a2.91,2.91,0,0,1-.3.17l-.37.19-.34.15-.36.13a2.84,2.84,0,0,1-.38.13l-.36.1c-.14,0-.26.07-.4.09l-.42.07-.35.05a7,7,0,0,1-.79,0H160a8,8,0,0,1,0-16h20.69L128,107.31l-26.34,26.35a8,8,0,0,1-11.32,0L40,83.31V200H224A8,8,0,0,1,232,208Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
