
import {TodosComponent}  from '../components/todos/todos.component';
import {HomeComponent} from  '../components/pages/home/home.component'
export class GetRoutes {
    getAppRoute(){

        return [
            {path:'',component: HomeComponent},
            {path:'todos',component: TodosComponent}
        ]
    }
}