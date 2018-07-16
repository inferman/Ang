import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-component',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  plainText = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus dicta dolores neque sequi ut. Aut
  corporis deleniti dignissimos esse et ex, libero nemo nesciunt nisi quas quasi, ratione repellendus sapiente tempora
  voluptates? Accusantium deleniti eos laudantium, molestias nesciunt porro quia voluptatem! Ad aliquam architecto
  aspernatur atque consequuntur deleniti earum eius ex explicabo facere hic ipsum itaque iure maxime modi nisi non
  nostrum obcaecati odio officia, optio porro quam, qui quibusdam repellendus rerum sequi similique soluta tempora
  tempore tenetur vero voluptate voluptatum! Amet blanditiis consequatur expedita ipsa ipsam, quam voluptate
  voluptatibus. Delectus deleniti eaque, earum fuga molestias nostrum provident repudiandae!
  `;
  constructor() { }


}
