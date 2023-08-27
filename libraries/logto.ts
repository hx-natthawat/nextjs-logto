// libraries/logto.js
import LogtoClient from "@logto/next";

export const logtoClient = new LogtoClient({
  endpoint: "http://localhost:3001/",
  appId: "eb02slyii22pds2lam1tk",
  appSecret: "1alooxeh28ykt349e2r28",
  baseUrl: "http://localhost:3000", // Change to your own base URL
  cookieSecret: "nbsoh460xyj1zsl78ttf2zihovblx6iw", // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === "production",
});
