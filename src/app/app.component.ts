import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:
  // `
  // <h3> 这是一个template，不是templateUrl</h3>
  // <p> 注意二者的差别</p>
  // `,
  styleUrls: ['./app.component.css'],
  // styles:[
  //   ` h3{color:red;}
  //     p{color:blue;}
  //   `
  // ]
})
// controller  处理数据源， Angular是MVC结构
export class AppComponent {
  title = 'myapp';
}
