import {fromEvent,Subject,pipe} from "rxjs"
import { tap,map,scan } from "rxjs/operators";
const li = document.querySelector("#li");
const btn = document.querySelector("#btn")

console.log(li.innerHTML);
class ViewModel{
    constructor(){
        this.list = new Subject()
        this.list_v = []
        this.init()
    }
    init(){
        this.list.subscribe((v)=>{
            li.innerHTML = ""
            v.map(el=>{
                const makeHtml = `
                <li>${el}</li>
                `
                li.innerHTML+=makeHtml
                console.log(makeHtml);
                
            })
        })
    }
    add(value){
        this.list_v.push(value)
        this.list.next(this.list_v)
    }
}

const vm = new ViewModel()
const a = new Subject("sd")
a.subscribe(v=>{
    console.log(v);
    
})
a.next("2")
fromEvent(btn,"click").subscribe(()=>{
    vm.add("a")
})