import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string ='https://cloud.estacaonerd.com/wp-content/uploads/2020/09/21162149/MARVELMCUEXPANDED-768x387-1.jpg'
  contentTitle: string = 'Notícias'
  contentDescription: string = 'Olá, mundãooooo!!'
  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }
}
