var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var c = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && c(a, e, l[e]);
  if (o)
    for (var e of o(l))
      s.call(l, e) && c(a, e, l[e]);
  return a;
};
var d = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && s.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as V } from "react";
import n from "../../lib/OptiBase.mjs";
const B = V((t, e) => {
  var r = t, { children: a } = r, l = d(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, p({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0V59l52,52,23.51-23.52a12,12,0,0,1,17,0L188,139V128a12,12,0,0,1,24,0v40q0,.6-.06,1.2c0,.16-.05.33-.07.49s-.06.45-.1.67-.09.38-.14.56-.09.39-.15.58l-.19.54c-.07.19-.13.38-.21.56s-.15.34-.23.5-.17.38-.27.57-.18.3-.27.45-.21.38-.33.56-.24.32-.36.47-.22.32-.34.47-.46.53-.71.78l-.08.1-.1.08c-.25.25-.51.48-.78.71l-.46.34c-.16.12-.32.25-.48.36s-.37.22-.55.33-.3.19-.46.27-.37.18-.56.27-.33.16-.51.23l-.54.21-.57.19a4.92,4.92,0,0,1-.55.14l-.58.15-.64.09-.53.08A11.51,11.51,0,0,1,200,180H160a12,12,0,0,1,0-24h11l-43-43-23.51,23.52a12,12,0,0,1-17,0L44,93V196H224A12,12,0,0,1,236,208Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};