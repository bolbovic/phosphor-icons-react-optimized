var l = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? l(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && m(a, e, r[e]);
  if (h)
    for (var e of h(r))
      o.call(r, e) && m(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var H = t, { children: a } = H, r = v(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, p({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M192,136a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h8A8,8,0,0,1,192,136Zm-88-8H72a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM240,88v96a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V88A16,16,0,0,1,32,72H48V56A16,16,0,0,1,64,40H96a16,16,0,0,1,16,16V72h32V56a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72h16A16,16,0,0,1,240,88ZM160,72h32V56H160ZM64,72H96V56H64ZM224,184V88H32v96H224Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
