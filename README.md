# Angular应用程序的运行 
    找到配置文件：Angular.json
        "index": "src/index.html",
        "main": "src/main.ts",
# Angular 应用由 Modules -> components

# 找到应用程序的入口：
    程序层面，看main.ts     main.ts文件
    bootstrapModule(AppModule)
        Angular
            |
    root module : 根模块    bootstrap:(AppComponent)
            |
    root component : 根组件 (AppComponent)
            
# z找网页（template/view 视图）的入口
    必然有一个类似 index.html

# 定义 Angluar 自有的标签（元素、指令、标签），Directive：指令
    <app-root> </app-root>  一个标签（元素）就是一个组件

# 解读 component
@Component({
  selector: 'app-root', 相当于 html 标签
  templateUrl: './app.component.html',  HTML 文件
  styleUrls: ['./app.component.css']    CSS 文件
})
 
# controller  处理数据源， Angular是MVC结构
export class AppComponent {     //export  可供其他组件调用
  title = 'myapp';              //class的属性，与对应的 HTML 文件绑定
}

{{ value }}     // Interception  插值，数据绑定
// 称之为：模版变量 （template value）

做个类比： MVC：Component Class 是 控制器（Controller），而 HTML template 就是 View（视图）

component 的 HTML 中， 不要用的标签：   <html>  <body>  <script>




# 创建一个组件 home
查看 angular.json 文件：
"prefix": "app",

在所创建的 component 的 selector 添加了 app
selector: 'app-home',

# 如何自定义 root component？
修改 2 个地方
    1. app.module.ts 中修改 boostrap 修改为
    2. 修改 index.html 入口 <app-root> 为<app-home>

# 属性数据绑定 （property binding）
数据流向：从controller - > template
    通过 {{ 变量名称 }}，称之为：插补值（intorplation）
    注意事项：一定要注意控制器的变量与template的变量名称要一致
Typescript 的数据类型，一律小写。比如 string boolean number


应用场景：通过改变 DOM 元素的属性，动态显示/隐藏一个元素
知识点：HTML 属性与 DOM属性的区别
    改变 HTML 属性，浏览器需要刷新
    改变 DOM 属性，浏览器会自动刷新
    HTML 是由 DOM 决定的
实现思路：
    通过控制 DOM 元素的 [hidden] 属性
代码优化：
    创建一个类，和类的实例
    import class （导入所定义类）
小结：
    组件属性绑定：
    （1）这是组件内的属性绑定，不是组件之间的属性绑定
    （2）这里的属性，是指 DOM 元素的属性
    （3）这属性，也是指： Class 里面所声明的变量（属性变量）
    （4）对 DOM 属性操作时，DOM 的属性要加上 []
# 组件内的事件绑定 （event binding）
应用场景：点击 DOM 的 Button（出发一个事件 event），用来显示/隐藏一个 DOM 与元素
实现思路：
    获取 button 的点击事件（click event）
    编写事件处理的方法
代码优化：
    1. 在 class 中声明一个方法（method）
    2. 在 DOM 的 button 的 click 事件中，调用 class 所声明的方法

小结：
    组件内的事件绑定是指：
    （1）DOM 元素的事件，通常是 button 的 click 事件
    （2）事件的名称是固定的，button 事件要用 click
    （3）必须绑定 DOM 元素所支持的事件（event）

总结：通过这个实例，实现了 [input] 和 [output] 的联动。
    [input] 里面的 input 不是关键字，而是 DOM 元素的属性
    [output] 里面的 output，也不是关键字，而是 DOM 元素的 事件（event）名称

# 组件之间的属性绑定 （data binding）
应用场景：
    把 parent 组件的“值”，传给它的 child 组件，并在 child 组件中显示出这个“值”
    这个两个组件在同一个页面，也没有经过服务器的请求
    注意：以用户体验为中心，这里讲的是：单页面应用，一个页面由多个组件构成，所以组件之间需要数据交互

实现思路：
    前置条件：一定要把 child 组件内置于 parent 组件中。也就是说，parent 组件内嵌了 child 组件
    体现组件的父子关系

具体做法
1. child 组件内的属性绑定
2. parent 组件内的属性绑定
3. parent 和 child 组件之间的属性绑定

小结：
    1. 组件之间的属性绑定，说白了，就是把parent 组件的“值”传给 child组件
    2. 先从 child component 做起，在 child 的 class 中声明一个带有@Input 标识符的属性变量
    3. parent 组件的 <app-child>, 这是 [input] 的 input 就是 child 的 @Input属性变量
    4. 组件内的属性绑定与之前的实例是一样的


# 组件之间的事件绑定 （event binding）
应用场景： parent component 内嵌了一个 child component，child 的 template 有一个 button ，点击这个button， 把 child 的数据传递给 parent component
数据流向： child -> parent
用到的知识点： Output、EventEmitter （事件发射器）

实现思路：
    1. 构建 child 的事件绑定
    2. 构建 parent 的事件绑定
    3. parent 和 child 的关系

实现过程：
    为了美化， 引入 bootstrap 到 index.html

知识点： 设计模式中的观察者模式， EventEmitter 是一个实现了观察者模式的对象，它管理一系列的订阅者（subscribe），并向其发布事件的对象

观察者设计模式： 举例来说， server 返回的数据，放在一个地方，只有去取才能拿到
举例场景：
        报刊中心（分发中心）
                ｜
    订阅者（subscribe），订阅者（subscribe）
    只有订阅了，才能得到报刊的信息
    有的框架在用到观察者模式时，非常明确，有一个 observer center
    angular 没有明确的 observer， 但是它由明确的 subscribe
    subscribe 本身是一个方法，用于订阅变化的信息。

注意事项：
    这里所说的 Output 是指 child component 的输出
    @Input、@Output 都是以 child component 为参考
    @Input、@Output 都是定义在 child component 中

    这个模式更像是 delegate 模式（委托模式）
    child 发起一个 task，但 child 不执行这个事件；那么，谁来执行这个事件呢？或者说，委托谁来处理这个事件呢？ Angular 定义，由 parent 来处理这个事件。

特别注意的事项：
    parent 与 child 的 @Output、@Input 之间的关系是“固定的”，名字必须一致。
    parent 中的（output name）的 output name 必须是 child 中所定义的哪个@Output、@Input

补充：回调函数中，参数的命名不重要，单数的位置是唯一的。
    如果一个函数的 callback 函数，ke yi jian dan ming m可以简单命名函数的参数为：（cb），cb:call back 的缩写

知识点：$event 是一个特别的变量，它代表 child component 的 EventEmitter 所发射的内容（对象），它代表是一块数据存储区域。

总结：
    自顶向下的数据流：简单；而逆向的数据流，有些复杂，必须通过 EventEmitter 实现


# 有一个 NG 工程
    没有 node_modules 文件夹，执行 ng serve -o
    方法： 在终端进入此工程目录路径下，执行 npm install 安装工程的依赖包 (modules)
    注意： 整个 ng 工程，由 package.json 管理，包括 modules 版本

# 该实例应用的场景
    构建一个页面， 由 2 个 component 组成，一个 product list component，一个是 product create component
        product list component （parent）
        product create component （child）
    当添加一个商品后， 创建的商品会自动添加到 商品列表 中

# 实现思路
（一）
    1. 构建页面， 引入 bootstrap，在 index.html中，引入 bootstrap 的 cdn
    2. 构建 parent 组件
    3. 创建一个 Product 类      ng g class product
        导入类，创建类的对象    
        import { Product } from "../product"
        products : Product[];
    4. *ngFor 循环，用在 template
        *ngFor = "let obj of products" 语法解读：
        p 是我们定义一个对象，用于遍历数组时，拿到数组中的每个对象
        参考 TS 中的 for...of 循环的用法

（二）创建 product create 组件
    1. form 表单，引入 bootstrap
    2. 添加商品的 button，处理 button 的 click 事件
    3. 构建数据，创建 Product 对象，并把 Product 对象发送给 parent 组件
    4. 导入 EventEmitter 和 Output
        import { Component, Oninit, Output, EventEmitter } from '@angular/core';
        @Output() selected =  new EmitEmitter<Product>();
        <Product>: 这里的 < > 遵循一种协议，发射的对象类型是 Product

知识点：双向数据绑定 two-way data bingding
    [(ngModel)] 的应用， 它是 {}, 外加[]
    [ ]: 属性绑定
    ( ): 事件绑定   （onChanged）
浏览器出现 error 在 console 所示
can't bind to 'ngModel' since it isn't a known property of 'input'. ("bel for="title">商品名称：</label>)
解决方法：在使用 ngModel 时，一定要在 app.module.ts 中导入

当用到 ngModel 时，一定要设置它的 name 属性

ngModel 小结：通过 input 的 ngModel，实现了双向数据绑定，input 数据来自 class，output 事件由 template 触发，实现了数据的编辑页面。

（三）完成组件之间的绑定
在 parent 组件的 template 中，引入 child 组件的 @Output 方法
<app-product-create (selected) = "addProduct($event)"></app-product-create>

注意：
    （ ）里面的函数名称来自 child 组件的 @Output 声明
    （）= 等号右边是 parent component 所要实现的方法
    $event 参数是一个特别的对象，传值用的

待完善：
用到数据时，需要创建一个 serveice，因为 service 是一个单例 （singleton 单例模式）


知识点：用到 *ngFor 时，一定要注意它加到哪个位置，它对所在的元素做循环
    这种用法，是对 <tr> 做循环，有多少个 <tr> 取决于数组的length
<tr *ngFor = "let obj of products">
    <td>{{ obj.title }}</td>
    <td>{{ obj.price }}</td>
</tr>

    ///-------- 工程改造：-------
# 不用 ngModel，要用 template reference variable （模版引用变量）
    方法： 定义一个 # 变量名

# 知识点：简单（primitive）数据类型、对象（object）数据类型
        简单数据类型：string、number、boolean
            使用：不用实例化，var1:boolean；var = false;
        对象数据类型：数组、对象（objective），数组是一个典型的对象数据类型
            使用：必须实例化
                products：Product[];    //声明一个类型（是一个类）
                new：   //才是实例化
                初始化一个数组，给数组直接初始化赋值。（相当于类的实例化）

    技巧：
        code review：代码走查，项目中，不能出现 hardcode（带有业务逻辑的 hard code）


# 客户端路由（前端路由） routing，体验单页面应用（SPA：Single Page Application）
1. 创建需要的组件（header、product-list、product-create）
2. 构建路由，在 app.module.ts 中
    （1）路由配置
    （2）imports 到 RouterModule
3. 技能：如何导入一个module？要把 module 导入到 app.module.ts
    imports:[..]
    设置路由方式： Hash 带有 # 的路由
4. 路由的配置只是解决了 url 的跳转，但没有解决 component 跳转
const routes: Routes = [
    {path: 'home', component: HomeComponent},
]
5. 路由占位符：当满足 URL 时， 这个位置自动被对应的 component 所替代。
<router-out></router-out>

6. 动态路由的实现，不再用 hardcode

7. 调试技巧
    {{  }} 两个大括号必须成对出现，否则，Angular 无法识别，也无法取代它的变量，当成了普通字符串来处理

8. 知识点：依赖注入（DI：Dependency Injection）,在 NG 中，依赖注入常用在 constructor 中
    constructor(private router: Router) {}
    常规思想：用到类时，先声明类，再创建类的实例（new）
    依赖注入： 用到类（服务）是，直接拿来就用，不用 new，少了一步
    常用到 service 调用上。必须放在 constructor 内才可以。


# 引入模板的几种方法（引入 bootstrap）
    1. 直接在 index.html 中引入 bootstrap CDN
        验证模版是否生效的方法：<button class="btn btn-danger"></button>
    2. 通过 npm 指令安装 （npm install bootstrap）
    3. 引入 bootstrap
        （1）在 styles.css（全局样式）
        （2）在 angular.json 文件配置
        @import “../node_modules/bootstrap/dist/css/bootstrap.min.css”
        注意：是@import，且以;结尾
    技能：当配置文件（angular.json）发生变化时，需要重新编译
    在 angular 工程中，不再通过传统方式下载引用 bootstrap（<script>）


# 如何导入 Angular Material Design？
    1. 安装 官网指令安装
    知识点：app.module.ts 文件中，@NgModule 中的 declarations 和 imports 区别。
    declarations: 放入 components（组件）的地方
    imports: 放入 module（模块）

验证 Material design 生效的方法，看看按钮是否有变化
<button mat-raised-button color="primary">material design 按钮</button>


# 模拟数据来自第三方： https://jsonplaceholder.typicode.com/photos

知识点：如果自己的 chrome 浏览器没有出现这种规整的JSON数据结构，那么，需要安装一个插件（JsonView）

获取后台数据的方法：
1. 引入 HttpClientModule 到 app.module.ts
2. 在 app.component.ts 中，注入服务，订阅数据变化，并获取网络数据
    constructor（private http: HttpClient）{};
    ngOnInit(){
        this.http.get("https://jsonplaceholder.typicode.com/photos")
        .subscribe(data => {
            console.log("from sever data=", data);
        })
    }




# 应用场景：
    获取到后台的数据，并展示在 web 页面上。数据来源：https://jsonplaceholder.typicode.com/photos

# 实现思路：
    1. 构建 Angular 工程。
    2. 引入（import） HttpClientModule
        在 app.module.ts 文件完成（引入了 module）
        还要在 component 引入 httpClient（这是一个 service）
    3. 通过 observable（可观察对象），获取到 server 的数据；
    4. 通过 订阅 （subscribe）这个 Observable，给 component 提供数据
    5. 在组件的 html，显示后台的数据，以 card 样式 展示出来。
    每一个 product 的数据结构：
    {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }
    6. 优化：创建一个 service，通过 service 注入，获取到后台数据。
    7. service 给组件提供数据

# 知识点
app.component.ts 文件中，看到
    class AppComponent implements OnInit    //这里的 implement 是一个关键字，“实现”
    具体来说，它“实现”一个接口（interface），为什么要实现一个接口（interface）呢？
    因为 interface 只是定义了一个格式（规则），还没有实现，所以要实现它。
    参考：OnInit 的接口定义，如下：
    export interface OnInit{}

# 创建服务（service）
    $ ng g service xx (product)





























# Myapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
