import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<single-page-scrolling [app]="app"></single-page-scrolling>`
})

export class AppComponent {
	app = {
		navMenu:	[
			{link: "#intro", label: "Home"},
			{link: "#about", label: "About"},
			{link: "#calendar", label: "Calendar"},
			{link: "#membership", label: "Membership"},
			{link: "https://goo.gl/7c5jOW", label: "Sign-up", external: true},
			{link: "#contact", label: "Contact"}
		],
		intro:		{
			title:				"Republican Presidential Appointees for Trump",
			buttonTitle:	"I Support Donald Trump! Sign Me Up!",
			buttonLink:		"https://goo.gl/7c5jOW"
		},
		about:		{
			img:	      "img/trump-2.jpg",
      smallTitle: "America First",
      boldTitle:  "Republican Presidential Appointees ",
      lightTitle: "for Trump",
			text:	      "We are former Presidential Appointees in the Ronald Reagan, George H. W. Bush and George W. Bush administations. We favor an America with a strong national defense, tax and economic policy to support strong economic growth, protection of our freedoms, and conservative Supreme Court appointees that will interpret the law with strict constitutional adherence. Therefore, we support Donald J. Trump and Governor Mike Pence for President and Vice President of the United States."
		},
		calendar:	{
			events:				[
				{
					date:				new Date(2016,8,17,11),
					endDate:		null,
					name:				"Constitution Day Celebration",
					location:		"La Crosse, Outagamie, Waukesha, Shawano, Wausau, West Bend, Milwaukee, and Dane County Victory Centers",
					contact:		{
						name:				"Charlotte Rasmussen",
						email:			"charlotter@ceas.coop",
						phone:			"(715) 551-9724"
					}
				},
			]
		},
		contact:	{
			text:			"Contact Republican Appointees for Trump",
			email:		"mpduffey@gmail.com"
		},
		footer:		{
			text:			"Paid For By Donald J. Trump for President"
		}
	};
}