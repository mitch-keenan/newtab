// Define links
let links = [
  {
    // Cheddar
    name: "cheddar",
    link: [
      {
        name: "email",
        link: "https://mail.google.com/mail/u/3/"
      },
      {
        name: "github",
        link: "https://github.com/cheddartv"
      },
      {
        name: "clubhouse",
        link: "https://app.clubhouse.io/cheddar/stories/"
      },
      {
        name: "segment",
        link: "https://app.segment.com/cheddartv/overview"
      },
      {
        name: "jenkins",
        link: "https://ci.ratemyprofessors.com/"
      },
      {
        name: "circle",
        link: "https://circleci.com/gh/cheddartv/rmp-client"
      },
      {
        name: "prod",
        link: "https://www.ratemyprofessors.com/"
      },
      {
        name: "staging",
        link: "https://staging.ratemyprofessors.com/"
      },
      {
        name: "dev",
        link: "https://dev.ratemyprofessors.com/"
      },
      {
        name: "staging admin",
        link: "https://admin-staging.ratemyprofessors.com/admin/index.jsp"
      },
      {
        name: "prod admin",
        link: "https://admin-production.ratemyprofessors.com/admin/index.jsp"
      },
      {
        name: "analytics",
        link:
          "https://analytics.google.com/analytics/web/#/report-home/a130629720w190066860p186323767"
      },
      {
        name: "confluence",
        link: "https://cheddartv.atlassian.net/wiki/spaces/R/overview"
      },
      {
        name: "optimize",
        link: "https://optimize.google.com/optimize/home/?hl=en-US#/accounts"
      },
      {
        name: "scalyr",
        link:
          "https://www.scalyr.com/logStart?teamToken=WRthgSwi8ZSS3ZWwCy4IEA--"
      },
      {
        name: "sentry",
        link: "https://sentry.io/organizations/cheddar/issues/?project=1420012"
      },
    ]
  },
  {
    // REDspace
    name: "redspace",
    link: [
      { name: "email", link: "https://mail.google.com/mail/u/0/#inbox" },
      { name: "drive", link: "https://drive.google.com/drive/u/0/" },
      { name: "jira", link: "https://jira.redspace.com/secure/Dashboard.jspa" },
      {
        name: "tempo",
        link: "https://jira.redspace.com/secure/Tempo.jspa#/my-work/timesheet"
      },
      {
        name: "tech share board",
        link: "https://jira.redspace.com/secure/RapidBoard.jspa?rapidView=689&projectKey=WTS"
      },
      {
        name: "timesheet approvals",
        link: "https://jira.redspace.com/secure/Tempo.jspa#/teams/team/108/approvals"
      },
      
      { name: "stash", link: "https://stash.redspace.com/dashboard" },
      // { name: "trello", link: "https://trello.com/b/RLVQoQvc/work" },
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
        name: "prosaris stash",
        link: "https://stash.redspace.com/projects/PROS/repos/prosaris-leak-finder-dashboard/"
      },
      {
        name: 'recruiter box',
        link: 'https://redspace.recruiterbox.com/app/#dashboard/type:review_pending_on_me'
      }
      // {
      //   name: "ip whitelist",
      //   link: "https://intranet.redspace.com/it/viacom-ip-whitelist/"
      // }
    ]
  },
  // {
  //   // Viacom
  //   name: "viacom",
  //   link: [
  //     {
  //       name: "local",
  //       link: "http://localhost:8001"
  //     },
  //     {
  //       name: "local admin",
  //       link: "http://localhost:8001/wp-login.php"
  //     },
  //     {
  //       name: "REDspace stash",
  //       link:
  //         "https://stash.redspace.com/projects/NICK/repos/noggin-v2/browse?at=refs%2Fheads%2Fqa"
  //     },
  //     {
  //       name: "jira",
  //       link:
  //         "https://jira.mtvi.com/secure/RapidBoard.jspa?rapidView=3644&projectKey=NW2&view=planning.nodetail&issueLimit=100"
  //     },
  //     {
  //       name: "jenkins",
  //       link: "https://build.viacom.com/job/Wordpress/job/Noggin"
  //     },
  //     {
  //       name: "prod",
  //       link: "https://www.noggin.com"
  //     },
  //     {
  //       name: "staging",
  //       link: "http://www.noggin-q.mtvi.com"
  //     },
  //     {
  //       name: "dev",
  //       link: "http://www.noggin-d.mtvi.com"
  //     },
  //     {
  //       name: "confluence",
  //       link: "https://confluence.mtvi.com/display/KIDSANDFAMILY/NOGGIN"
  //     }
  //   ]
  // },
  {
    // Other
    name: "other",
    link: [
      { name: "email", link: "https://mail.google.com/mail/u/1/#inbox" },
      { name: "drive", link: "https://drive.google.com/drive/u/1/" },
      { name: "keep", link: "https://keep.google.com/u/1/" },
      { name: "prose", link: "http://prose.io/#konamacona" },
      { name: "hacker news", link: "https://news.ycombinator.com/" },
      { name: "reddit", link: "https://reddit.com" },
      { name: "twitter", link: "https://tweetdeck.twitter.com/" },
      { name: "bgg", link: "https://www.boardgamegeek.com/" },
      { name: "sheets", link: "https://docs.google.com/spreadsheets/u/1/" },
      { name: "docs", link: "https://docs.google.com/document/u/1/" },
      { name: "reader", link: "https://www.inoreader.com/" },
      { name: "airbnb", link: "https://www.airbnb.ca/dashboard" }
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

const monitorWidths = [1280, 1920, 2560, 3840, 4320];

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
  // TODO: More here
  for (let i = 0; xOffset < 0 && i < monitorWidths.length; i++) {
    if (xOffset + monitorWidths[i] > 0) {
      xOffset += monitorWidths[i];
      console.log("addition chose", monitorWidths[i], xOffset);
      break;
    }
  }
  for (let i = monitorWidths.length - 1; xOffset > windowWidth && i >= 0; i--) {
    if (
      xOffset - monitorWidths[i] < windowWidth &&
      xOffset - monitorWidths[i] > 0
    ) {
      xOffset -= monitorWidths[i];
      console.log("subtraction chose", monitorWidths[i], xOffset);
      break;
    }
  }

  let size = "";

  // Figure out hows it's being displayed as a wallpaper
  // let ratioDiff = imageAspectRatio / aspectRatio;
  // // console.log("ratioDiff " + ratioDiff);
  // if (ratioDiff > 1) {
  //   console.log("image is wider than window");

  //   // wallpaper wider
  //   // have to account for clipping done by os for wallpaper

  //   // console.log(imageWidth - windowWidth);
  //   // xOffset += (imageWidth - windowWidth) / 2 - 25; // 25 is a HACK for my default res // TODO

  //   //default offset
  //   // 20
  //   //1680 -> 240
  //   // wdiff: 220px
  //   // expected: 120
  //   // actual: 95
  //   //1440  -> 480
  //   // wdiff: 480px
  //   // expected: 240px
  //   // actual: 175px
  // } else if (ratioDiff < 1) {
  //   // wallpaper taller

  //   console.log("image is taller than window");
  // } else {
  //   console.log("image is same aspect");
  //   // same aspect ratio
  //   // do nothing
  // }

  // Invert the offsets
  xOffset *= -1;
  yOffset *= -1;

  // Don't offset positive, this is incase something fucks up we don't want a white bar.
  xOffset = Math.min(0, xOffset);
  yOffset = Math.min(0, yOffset);

  // Don't offset too negative, also avoids the white bar
  xOffset = Math.max(xOffset, -window.innerWidth - imageWidth);
  yOffset = Math.max(yOffset, window.innerHeight - windowHeight);
  // console.log("max", yOffset, window.innerHeight - windowHeight);

  // console.log(imageHeight, imageHeight + yOffset, window.innerHeight);
  // console.log(imageWidth, imageWidth + xOffset, window.innerWidth);

  // if ((imageHeight + yOffset) * -1 < windowHeight) {
  //   yOffset = 0;
  // }
  // if ((imageWidth + xOffset) * -1 < windowWidth) {
  //   xOffset = 0;
  // }

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
  //   outer size: ${window.outerWidth}x${window.outerHeight}
  //   offsets: ${xOffset} ${yOffset}
  // `);

  // console.log(`
  // 	background-size: ${windowWidth}px ${windowHeight}px;
  // 	background-position: ${xOffset} ${yOffset}
  // `);
};

window.onload = function() {
  // populate links
  document.getElementById("container").innerHTML = processLink(links);

  fixBackgroundSize();
  window.addEventListener("resize", () => {
    setTimeout(fixBackgroundSize, 50);
  });

  var clock = document.getElementById("clock");
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
  clock.innerHTML = `${h}:${leftPad(m, 2, "0")}:${leftPad(s, 2, 0)}`;
  requestAnimationFrame(() => setTime(clock));
}
