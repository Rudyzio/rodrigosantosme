import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rs-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  mastersBody: string =   `<p class="card-text">Specialization in Software Engineering and Distributed Systems</p>
                          <p class="card-text">Master Thesis: dDocs – A Citizen-Centric Electronic Document and Record Management System</p>
                          <span>Relevant Courses:</span>
                          <ul>
                            <li>Advanced Programming</li>
                            <li>Design and Implementation of Distributed Applications</li>
                            <li>Mobile and Ubiquitous Computing</li>
                            <li>Network and Computer Security</li>
                            <li>Software Architectures</li>
                          </ul>`;

  bachelorBody: string = `<span>Relevant Courses:</span>
                          <ul>
                            <li>Analysis and Synthesis of Algorithms</li>
                            <li>Computer Networks</li>
                            <li>Databases</li>
                            <li>Distributed Systems</li>
                            <li>Human-Computer Interaction</li>
                            <li>Logic for Programming</li>
                            <li>Object-Oriented Programming</li>
                            <li>Operating Systems</li>
                            <li>Software Engineering</li>
                          </ul>`;

  constructor() { }

  ngOnInit() {
  }

}
