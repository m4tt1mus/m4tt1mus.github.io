var tiles = new Vue({
  el: "#app",
  data: {
    mattsThings: [
      {
        title: "Behold, BlazorMirror!",
        url: "http://headspring.com/2020/12/22/behold-blazormirror-a-guide-to-building-a-magic-mirror-with-blazor-and-raspberrypi/",
        description: "Your Raspberry Pi Blazor Magic Mirror build guide.",
      },
      {
        title: "Successful updates with Electron Forge",
        url: "http://headspring.com/2020/09/14/crash-prevention-successful-updates-with-electron-and-electron-forge/",
        description: `Electron is awesome, but Electron updating needs to be configured to work well. In
          this Electron tutorial, we show you how to configure updating and warning the user not to shut down
          an application when it’s updating—proactively eliminating problems and saving time.`,
      },
      {
        title:
          "Building, signing, and publishing Electron Forge applications for Windows",
        url: "http://headspring.com/2020/09/24/building-signing-and-publishing-electron-forge-applications-for-windows/",
        description: `We dig into the different types of code signing certificates, coding the updater,
          configuring your package.json, and how to initiate a build/deployment when using Electron with
          Electron Forge.`,
      },
      {
        title: "JavaScript: The Basics and Confusion",
        url: "/features/jsPres/JavascriptTheBasicsAndConfustionPresentation.html",
        description: `A presentation covering a lot of the strange parts of JavaScript. Great for intermediate JavasScript devs.`,
      },
      {
        title: "Part 1: IdentityServer with Active Directory or other SSO auth",
        url: "/features/identityServer/post1.html",
        description: `This talks about overriding IdentityServer to use AD as the source of account validation.`,
      },
      {
        title: "Part 2: Hitting our custom IdentityServer endpoint from Xamarin Forms",
        url: "/features/identityServer/post2.html",
        description: `Here we discuss how to authenticate against our previous created IdentityServer endpoint from a 
          Xamarin Forms mobile app.`,
      },
      {
        title: "Part 3: Hitting our custom IdentityServer endpoint from your SPA",
        url: "/features/identityServer/post3.html",
        description: `Similar to the last article but this time we're hitting out previous created
          IdentityServer from a Single Page Application.`,
      },
    ],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
