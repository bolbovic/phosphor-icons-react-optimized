import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwyMjRhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsODgsMjI0Wm0xMjgtMTZhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsMjE2LDIwOFptMjQtMzJINTZWNzUuMzFBMTUuODYsMTUuODYsMCwwLDAsNTEuMzEsNjRMMjkuNjYsNDIuMzRBOCw4LDAsMCwwLDE4LjM0LDUzLjY2TDQwLDc1LjMxVjE3NkgzMmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCwyMjRhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsODQsMjI0Wm0xMzItMTJhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMjE2LDIxMlptMjQtMzJINTJWNzUuMzFhMTIsMTIsMCwwLDAtMy41MS04LjQ4TDI2LjgzLDQ1LjE3YTQsNCwwLDAsMC01LjY2LDUuNjZMNDIuODMsNzIuNDhBNCw0LDAsMCwxLDQ0LDc1LjMxVjE4MEgzMmE0LDQsMCwwLDAsMCw4SDI0MGE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NiwyMjRhMTQsMTQsMCwxLDEtMTQtMTRBMTQsMTQsMCwwLDEsODYsMjI0Wm0xMzAtMTRhMTQsMTQsMCwxLDAsMTQsMTRBMTQsMTQsMCwwLDAsMjE2LDIxMFptMjQtMzJINTRWNzUuMzFhMTMuOTQsMTMuOTQsMCwwLDAtNC4xLTkuOUwyOC4yNCw0My43NmE2LDYsMCwxLDAtOC40OCw4LjQ4TDQxLjQxLDczLjlBMiwyLDAsMCwxLDQyLDc1LjMxVjE3OEgzMmE2LDYsMCwwLDAsMCwxMkgyNDBhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwyMjRhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsOTIsMjI0Wm0xMjQtMjBhMjAsMjAsMCwxLDAsMjAsMjBBMjAsMjAsMCwwLDAsMjE2LDIwNFptMjQtMzZINjBWNzUuMzFhMTkuODYsMTkuODYsMCwwLDAtNS44Ni0xNC4xNEwzMi40OSwzOS41MWExMiwxMiwwLDAsMC0xNywxN0wzNiw3N3Y5MUgzMmExMiwxMiwwLDAsMCwwLDI0SDI0MGExMiwxMiwwLDAsMCwwLTI0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwyMjRhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsODgsMjI0Wm0xMjgtMTZhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsMjE2LDIwOFptMjQtMzJINTZWNzUuMzFBMTUuODYsMTUuODYsMCwwLDAsNTEuMzEsNjRMMjkuNjYsNDIuMzRBOCw4LDAsMCwwLDE4LjM0LDUzLjY2TDQwLDc1LjMxVjE3NkgzMmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaTTg4LDE2MEgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWODBhMTYsMTYsMCwwLDAtMTYtMTZIODhBMTYsMTYsMCwwLDAsNzIsODB2NjRBMTYsMTYsMCwwLDAsODgsMTYwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODh2OTZINDhWNzJIMjI0QTE2LDE2LDAsMCwxLDI0MCw4OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik04OCwyMjRhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsODgsMjI0Wm0xMjgtMTZhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsMjE2LDIwOFptMjQtMzJINTZWNzUuMzFBMTUuODYsMTUuODYsMCwwLDAsNTEuMzEsNjRMMjkuNjYsNDIuMzRBOCw4LDAsMCwwLDE4LjM0LDUzLjY2TDQwLDc1LjMxVjE3NkgzMmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as Trolley };