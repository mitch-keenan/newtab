// Define links
let links = [
  {
    name: "viacom",
    link: [
      { name: "email", link: "http://owa.viacom.com/" },
      {
        name: "jira",
        link: "https://jira.mtvi.com/secure/RapidBoard.jspa?rapidView=1516"
      },
      {
        name: "stash",
        link: "https://stash.mtvi.com/projects/RMP/repos/rmp-web/browse"
      },
      {
        name: "jenkins qa",
        link:
          "https://stage.build.viacom.com/view/Web%20RMP/job/relaunch-rmp-web-qa-git-2-java-7/"
      },
      {
        name: "jenkins release",
        link:
          "https://stage.build.viacom.com/view/Web%20RMP/job/draft-relaunch-rmp-app-prod-git-2-java-7-latest-web/"
      },
      {
        name: "release instructions",
        link:
          "https://gist.github.com/konamacona/7df72c0cca41531bd50e4162a43a5537"
      },
      {
        name: "qa admin",
        link: "http://admin.ratemyprofessors-q.mtvi.com/admin/"
      }
    ]
  },
  {
    name: "redspace",
    link: [
      { name: "email", link: "https://mail.google.com/mail/u/0/#inbox" },
      { name: "drive", link: "https://drive.google.com/drive/u/0/" },
      { name: "jira", link: "https://jira.redspace.com/secure/Dashboard.jspa" },
      { name: "stash", link: "https://stash.redspace.com/dashboard" },
      { name: "trello", link: "https://trello.com/b/RLVQoQvc/work" },
      {
        name: "calender",
        link: "https://calendar.google.com/calendar/render#main_7"
      },
      { name: "intranet", link: "https://intranet.redspace.com/#" },
      { name: "bamboo", link: "https://redspace.bamboohr.com/home/#" },
      {
        name: "payworks",
        link:
          "https://payroll.payworks.ca/Loginscreen.asp?err=loggedoff&LangID="
      },
      {
        name: "small improvements",
        link: "https://redspace.small-improvements.com/app/home"
      },
      {
        name: "ip whitelist",
        link: "https://intranet.redspace.com/it/viacom-ip-whitelist/"
      }
    ]
  },
  {
    name: "other",
    link: [
      { name: "email", link: "https://mail.google.com/mail/u/1/#inbox" },
      { name: "drive", link: "https://drive.google.com/drive/u/1/" },
      { name: "trello", link: "https://trello.com/b/lyNF9jQj/life" },
      { name: "hacker news", link: "https://news.ycombinator.com/" },
      { name: "reddit", link: "https://reddit.com" },
      { name: "twitter", link: "https://tweetdeck.twitter.com/" },
      { name: "bgg", link: "https://www.boardgamegeek.com/" },
      { name: "sheets", link: "https://docs.google.com/spreadsheets/u/1/" },
      { name: "docs", link: "https://docs.google.com/document/u/1/" },
      { name: "reader", link: "https://www.inoreader.com/" }
    ]
  }
];

function processLink(link) {
  // List of Links

  if (Array.isArray(link)) {
    return link.map(processLink).join("");
  }

  // Category

  if (Array.isArray(link.link)) {
    return `
			<div class="cat">
				<span class="cat-name">${link.name}</span>
				${processLink(link.link)}
			</div>
		`;
  }

  // Actual Link
  return `
		<a class="link" href=${link.link}>
			<span class="link-name">${link.name}</span>
		</a>
	`;
}

const fixBackgroundSize = () => {
  console.log("fix");

  var i = document.getElementById("background");

  let windowWidth = window.screen.width;
  let windowHeight = window.screen.height;
  let aspectRatio = windowWidth / windowHeight;
  let xOffset = window.screenX;
  let yOffset = window.screenY + (window.outerHeight - window.innerHeight);

  // Get image dimensions
  let imageWidth = i.naturalWidth;
  let imageHeight = i.naturalHeight;
  let imageAspectRatio = imageWidth / imageHeight;

  // Account for multi monitor
  while (xOffset < 0) {
    xOffset += windowWidth;
  }

  let size = "";

  // Figure out hows it's being displayed as a wallpaper
  let ratioDiff = imageAspectRatio / aspectRatio;
  // console.log("ratioDiff " + ratioDiff);
  if (ratioDiff > 1) {
    // wallpaper wider
    // have to account for clipping done by os for wallpaper

    // console.log(imageWidth - windowWidth);
    xOffset += (imageWidth - windowWidth) / 2 - 25; // 25 is a HACK for my default res // TODO

    //default offset
    // 20
    //1680 -> 240
    // wdiff: 220px
    // expected: 120
    // actual: 95
    //1440  -> 480
    // wdiff: 480px
    // expected: 240px
    // actual: 175px
  } else if (ratioDiff < 1) {
    // wallpaper taller
  } else {
    // same aspect ratio
    // do nothing
  }

  // Invert the offsets
  xOffset *= -1;
  yOffset *= -1;

  // Don't offset positive, this is incase something fucks up we don't want a white bar.
  xOffset = Math.min(0, xOffset);
  yOffset = Math.min(0, yOffset);

  // // Similarly, don't offset negative enough to clip the image

  // console.log(imageHeight, imageHeight + yOffset, window.innerHeight);
  // console.log(imageWidth, imageWidth + xOffset, window.innerWidth);

  // if ((imageHeight + yOffset) * -1 < windowHeight) {
  //   yOffset = 0;
  // }
  if ((imageWidth + xOffset) * -1 < windowWidth) {
    xOffset = 0;
  }

  // document.body.setAttribute('style', `
  // 	background-size: ${w}px ${h}px;
  // 	background-position: ${xOffset} ${yOffset}
  // `);

  i.setAttribute("height", `${windowHeight}px`);
  i.setAttribute(
    "style",
    `
		left: ${xOffset};
		top: ${yOffset};
	`
  );

  // console.log(`
  // 	image: ${imageWidth}x${imageHeight}
  // 	screen: ${window.screen.width}x${window.screen.height}
  // 	window pos: ${window.screenX}x${window.screenY}
  // 	inner size: ${window.innerWidth}x${window.innerHeight}
  // 	outer size: ${window.outerWidth}x${window.outerHeight}
  // `);

  // console.log(`
  // 	background-size: ${windowWidth}px ${windowHeight}px;
  // 	background-position: ${xOffset} ${yOffset}
  // `);
};

window.onload = function () {
  // populate links
  document.getElementById("container").innerHTML = processLink(links);

  fixBackgroundSize();
  window.addEventListener("resize", () => {
    setTimeout(fixBackgroundSize, 50);
  });

  var clock = document.getElementById('clock');
  setTime(clock);
};

function leftPad(string, count, character) {
  var result = string.toString();
  while (result.length < count) {
    result = character + string;
  }
  return result;
}

function setTime(clock) {
  var d = new Date();
  var h = d.getHours().toString();
  var m = d.getMinutes().toString();
  var s = d.getSeconds().toString();
  clock.innerHTML = `${h}:${leftPad(m, 2, '0')}:${leftPad(s, 2, 0)}`
  requestAnimationFrame(() => setTime(clock));
}