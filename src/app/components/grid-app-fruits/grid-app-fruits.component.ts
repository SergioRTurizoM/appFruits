import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grid-app-fruits',
  templateUrl: './grid-app-fruits.component.html',
  styleUrls: ['./grid-app-fruits.component.css']
})
export class GridAppFruitsComponent implements OnInit {
  
  public formFruits?: FormGroup; 


  columnDefs = [
    {headerName: 'Fruit Name', field: 'fruitName', sortable:true, filter: true, checkboxSelection: true},
    {headerName: 'Pounds', field: 'pounds', sortable:true, filter: true},
    {headerName: 'Category', field: 'category', sortable:true, filter: true},
  ];

  rowData = [
    {fruitName: 'Mango', pounds: 2, category: "Tropical" },
    {fruitName: 'Raspberry', pounds: 5, category: "Forest" },
    {fruitName: 'Pineapple', pounds: 3, category: "Tropical" },
  ]

    



  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formFruits = this.formBuilder.group({
      fruitName:['', [Validators.required]],
      pounds: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  send(): any {
    console.log(this.formFruits?.value);
  }

}
