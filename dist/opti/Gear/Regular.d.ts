import type { Icon } from "../../lib/types";
/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsODBhNDgsNDgsMCwxLDAsNDgsNDhBNDguMDUsNDguMDUsMCwwLDAsMTI4LDgwWm0wLDgwYTMyLDMyLDAsMSwxLDMyLTMyQTMyLDMyLDAsMCwxLDEyOCwxNjBabTg4LTI5Ljg0cS4wNi0yLjE2LDAtNC4zMmwxNC45Mi0xOC42NGE4LDgsMCwwLDAsMS40OC03LjA2LDEwNy4yMSwxMDcuMjEsMCwwLDAtMTAuODgtMjYuMjUsOCw4LDAsMCwwLTYtMy45M2wtMjMuNzItMi42NHEtMS40OC0xLjU2LTMtM0wxODYsNDAuNTRhOCw4LDAsMCwwLTMuOTQtNiwxMDcuNzEsMTA3LjcxLDAsMCwwLTI2LjI1LTEwLjg3LDgsOCwwLDAsMC03LjA2LDEuNDlMMTMwLjE2LDQwUTEyOCw0MCwxMjUuODQsNDBMMTA3LjIsMjUuMTFhOCw4LDAsMCwwLTcuMDYtMS40OEExMDcuNiwxMDcuNiwwLDAsMCw3My44OSwzNC41MWE4LDgsMCwwLDAtMy45Myw2TDY3LjMyLDY0LjI3cS0xLjU2LDEuNDktMywzTDQwLjU0LDcwYTgsOCwwLDAsMC02LDMuOTQsMTA3LjcxLDEwNy43MSwwLDAsMC0xMC44NywyNi4yNSw4LDgsMCwwLDAsMS40OSw3LjA2TDQwLDEyNS44NFE0MCwxMjgsNDAsMTMwLjE2TDI1LjExLDE0OC44YTgsOCwwLDAsMC0xLjQ4LDcuMDYsMTA3LjIxLDEwNy4yMSwwLDAsMCwxMC44OCwyNi4yNSw4LDgsMCwwLDAsNiwzLjkzbDIzLjcyLDIuNjRxMS40OSwxLjU2LDMsM0w3MCwyMTUuNDZhOCw4LDAsMCwwLDMuOTQsNiwxMDcuNzEsMTA3LjcxLDAsMCwwLDI2LjI1LDEwLjg3LDgsOCwwLDAsMCw3LjA2LTEuNDlMMTI1Ljg0LDIxNnEyLjE2LjA2LDQuMzIsMGwxOC42NCwxNC45MmE4LDgsMCwwLDAsNy4wNiwxLjQ4LDEwNy4yMSwxMDcuMjEsMCwwLDAsMjYuMjUtMTAuODgsOCw4LDAsMCwwLDMuOTMtNmwyLjY0LTIzLjcycTEuNTYtMS40OCwzLTNMMjE1LjQ2LDE4NmE4LDgsMCwwLDAsNi0zLjk0LDEwNy43MSwxMDcuNzEsMCwwLDAsMTAuODctMjYuMjUsOCw4LDAsMCwwLTEuNDktNy4wNlptLTE2LjEtNi41YTczLjkzLDczLjkzLDAsMCwxLDAsOC42OCw4LDgsMCwwLDAsMS43NCw1LjQ4bDE0LjE5LDE3LjczYTkxLjU3LDkxLjU3LDAsMCwxLTYuMjMsMTVMMTg3LDE3My4xMWE4LDgsMCwwLDAtNS4xLDIuNjQsNzQuMTEsNzQuMTEsMCwwLDEtNi4xNCw2LjE0LDgsOCwwLDAsMC0yLjY0LDUuMWwtMi41MSwyMi41OGE5MS4zMiw5MS4zMiwwLDAsMS0xNSw2LjIzbC0xNy43NC0xNC4xOWE4LDgsMCwwLDAtNS0xLjc1aC0uNDhhNzMuOTMsNzMuOTMsMCwwLDEtOC42OCwwLDgsOCwwLDAsMC01LjQ4LDEuNzRMMTAwLjQ1LDIxNS44YTkxLjU3LDkxLjU3LDAsMCwxLTE1LTYuMjNMODIuODksMTg3YTgsOCwwLDAsMC0yLjY0LTUuMSw3NC4xMSw3NC4xMSwwLDAsMS02LjE0LTYuMTQsOCw4LDAsMCwwLTUuMS0yLjY0TDQ2LjQzLDE3MC42YTkxLjMyLDkxLjMyLDAsMCwxLTYuMjMtMTVsMTQuMTktMTcuNzRhOCw4LDAsMCwwLDEuNzQtNS40OCw3My45Myw3My45MywwLDAsMSwwLTguNjgsOCw4LDAsMCwwLTEuNzQtNS40OEw0MC4yLDEwMC40NWE5MS41Nyw5MS41NywwLDAsMSw2LjIzLTE1TDY5LDgyLjg5YTgsOCwwLDAsMCw1LjEtMi42NCw3NC4xMSw3NC4xMSwwLDAsMSw2LjE0LTYuMTRBOCw4LDAsMCwwLDgyLjg5LDY5TDg1LjQsNDYuNDNhOTEuMzIsOTEuMzIsMCwwLDEsMTUtNi4yM2wxNy43NCwxNC4xOWE4LDgsMCwwLDAsNS40OCwxLjc0LDczLjkzLDczLjkzLDAsMCwxLDguNjgsMCw4LDgsMCwwLDAsNS40OC0xLjc0TDE1NS41NSw0MC4yYTkxLjU3LDkxLjU3LDAsMCwxLDE1LDYuMjNMMTczLjExLDY5YTgsOCwwLDAsMCwyLjY0LDUuMSw3NC4xMSw3NC4xMSwwLDAsMSw2LjE0LDYuMTQsOCw4LDAsMCwwLDUuMSwyLjY0bDIyLjU4LDIuNTFhOTEuMzIsOTEuMzIsMCwwLDEsNi4yMywxNWwtMTQuMTksMTcuNzRBOCw4LDAsMCwwLDE5OS44NywxMjMuNjZaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as Regular };