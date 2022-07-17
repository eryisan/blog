import blog from "https://deno.land/x/blog@0.4.1/blog.tsx";

blog({
  title: "贰壹叁",
  description: "我的记录",
  avatar: "avatar.png",
  avatarClass: "full",
  author: "贰壹叁",
  favicon: "favicon.ico",
  links: [
    { title: "Email", url: "mailto:eryisan213@qq.com" },
    { title: "GitHub", url: "https://github.com/eryisan" },
    { title: "Twitter", url: "https://twitter.com/IamNullUser" },
  ],
  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
