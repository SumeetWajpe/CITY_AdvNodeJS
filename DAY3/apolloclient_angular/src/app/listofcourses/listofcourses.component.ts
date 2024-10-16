import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';

const GET_ALL_COURSES = gql`
  query GetAllCourses {
    courses {
      id
      title
    }
  }
`;

@Component({
  selector: 'app-listofcourses',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './listofcourses.component.html',
  styleUrl: './listofcourses.component.css',
})
export class ListofcoursesComponent implements OnInit {
  courses: Observable<any> = new Observable<any>();

  constructor(private readonly apollo: Apollo) {}

  ngOnInit(): void {
    this.courses = this.apollo
      .watchQuery({ query: GET_ALL_COURSES })
      .valueChanges.pipe(map((result: any) => result.data.courses));
  }
}
