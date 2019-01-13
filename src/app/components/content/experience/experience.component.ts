import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rs-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  revealBody: string = `<p class="card-text">Currently working remotely for Reveal, a swedish company where the main goal consists in
                        providing pharmaceutical statistics to the customers.</p>
                        <ul>
                          <li>Developed a customized wrapper for the <a href="https://mailchimp.com/">MailChimp</a> API in C# using .NET
                            Core.</li>
                          <li>Developed a webhook to receive statistics from <a href="https://sendgrid.com/">SendGrid</a> in C# using
                            .NET Core.</li>
                          <li>Developed an API to handle email templates with various languages in C# using .NET Core.</li>
                          <li>Added features to the companys client portal, in Visual Basic using ASP.NET Web Forms.</li>
                          <li>Client portal migration from ASP.NET Web Forms (in Visual Basic) to ASP.NET Core MVC (in C#).</li>
                        </ul>`;
  
  mdssBody: string = `<p class="card-text">Full-Stack developer working with both front-end and back-end of two applications: Proof of
                        Life and dDocs</p>
                      <ul>
                        <li>Full-Stack developer working with both front-end and back-end of two applications: Proof of Life and dDocs</li>
                        <li>Led the team developing Proof of Life</li>
                        <li>Deployment and Continuous Integration with both applications</li>
                      </ul>`;
  
  inescBody: string = `<ul>
                        <li>Developed the first dDocs prototype</li>
                        <li>Support to various other colleagues in various projects</li>
                      </ul>`;

  constructor() { }

  ngOnInit() {
  }

}
